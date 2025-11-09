/* enhanced-app.js
   Expects your Exam.js to define a global `SchoolData` object (array at SchoolData.students)
*/

(function(){
  // DOM shortcuts
  const $ = id => document.getElementById(id);
  const loginCard = $('loginCard'), dashboardCard = $('dashboardCard'), studentCard = $('studentCard');
  const studentSelect = $('studentSelect'), qInput = $('q'), gradeFilter = $('gradeFilter'), classFilter = $('classFilter');
  const studentsTableBody = document.querySelector('#studentsTable tbody');
  const summaryChartCanvas = document.getElementById('summaryChart'), studentChartCanvas = document.getElementById('studentChart');

  let DATA = (window.SchoolData && window.SchoolData.students) ? window.SchoolData : { students: [] };
  let summaryChart = null, studentChart = null;

  function init(){
    populateStudentSelect();
    populateFilters();
    attachEvents();
    showDashboard(); // open dashboard for demo
    render();
    renderSummary();
  }

  /* ---------- populate UI ---------- */
  function populateStudentSelect(){
    studentSelect.innerHTML = '<option value="">Select Student — demo</option>';
    DATA.students.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s['Roll No'] || s.Roll || '';
      opt.textContent = `${s['Roll No']} — ${s.name}`;
      studentSelect.appendChild(opt);
    });
  }

  function populateFilters(){
    const grades = new Set(), classes = new Set();
    DATA.students.forEach(s=>{
      const g = s.Summary && s.Summary.Grade ? s.Summary.Grade : '';
      const c = s.Summary && s.Summary.Class ? s.Summary.Class : '';
      if(g) grades.add(g);
      if(c) classes.add(c);
    });
    // gradeFilter
    gradeFilter.innerHTML = '<option value="">All Grades</option>';
    Array.from(grades).sort().forEach(g => {
      const o = document.createElement('option'); o.value=g; o.textContent=g; gradeFilter.appendChild(o);
    });
    classFilter.innerHTML = '<option value="">All Classes</option>';
    Array.from(classes).sort().forEach(c => {
      const o = document.createElement('option'); o.value=c; o.textContent=c; classFilter.appendChild(o);
    });
  }

  /* ---------- events ---------- */
  function attachEvents(){
    $('loginBtn').addEventListener('click', login);
    $('viewBtn').addEventListener('click', () => {
      const v = studentSelect.value; if(!v) return alert('Pick a student from the dropdown first.');
      const s = DATA.students.find(x => (x['Roll No']||'') == v); if(s) showStudent(s);
    });
    $('logoutBtn').addEventListener('click', () => { showLogin(); });
    $('backBtn').addEventListener('click', showDashboard);
    $('printBtn').addEventListener('click', () => window.print());
    $('downloadPdf').addEventListener('click', () => window.print()); // placeholder
    $('exportJson').addEventListener('click', ()=> {
      const a = document.createElement('a'); a.href = 'data:application/json;charset=utf-8,'+encodeURIComponent(JSON.stringify(DATA, null, 2));
      a.download = 'data.json'; a.click();
    });
    qInput.addEventListener('input', render);
    gradeFilter.addEventListener('change', render);
    classFilter.addEventListener('change', render);
    studentsTableBody.addEventListener('click', (e)=> {
      const btn = e.target.closest('button[data-roll]');
      if(btn) {
        const roll = btn.getAttribute('data-roll');
        const stud = DATA.students.find(s => String(s['Roll No']) === String(roll));
        if(stud) showStudent(stud);
      }
    });
    // keyboard enter on select to view
    studentSelect.addEventListener('keydown', (e) => {
      if(e.key === 'Enter') {
        const v = studentSelect.value;
        if(!v) return;
        const s = DATA.students.find(x => (x['Roll No']||'') == v); if(s) showStudent(s);
      }
    });
  }

  /* ---------- views ---------- */
  function showLogin(){
    loginCard.style.display='block';
    dashboardCard.style.display='none';
    studentCard.style.display='none';
  }
  function showDashboard(){
    loginCard.style.display='none';
    dashboardCard.style.display='block';
    studentCard.style.display='none';
    render();
    renderSummary();
  }
  function showStudent(s){
    loginCard.style.display='none';
    dashboardCard.style.display='none';
    studentCard.style.display='block';
    renderStudentReport(s);
  }

  /* ---------- login ---------- */
  function login(){
    const name = $('name').value.trim().toLowerCase();
    const pwd = $('pwd').value.trim();
    if(!name || !pwd) return alert('Enter name and roll number.');
    const found = DATA.students.find(s => String(s['Roll No']) === String(pwd) && (s.name||'').toString().trim().toLowerCase() === name);
    if(!found) return alert('Not found — make sure name exactly matches and correct roll number.');
    showStudent(found);
  }

  /* ---------- rendering table ---------- */
  function render(){
    const q = qInput.value.trim().toLowerCase();
    const grade = gradeFilter.value, cls = classFilter.value;
    const rows = DATA.students.filter(s => {
      if(grade && ((s.Summary && s.Summary.Grade)||'') !== grade) return false;
      if(cls && ((s.Summary && s.Summary.Class)||'') !== cls) return false;
      if(q){
        return (s.name||'').toString().toLowerCase().includes(q) || (String(s['Roll No']||'')).includes(q);
      }
      return true;
    });

    studentsTableBody.innerHTML = '';
    rows.forEach(s => {
      const sum = s.Summary || {};
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${esc(s['Roll No']||'')}</td>
        <td>${esc(s.name||'')}</td>
        <td style="text-align:right">${esc(sum.TOTAL||'')}</td>
        <td style="text-align:right">${esc(sum.Average||'')}</td>
        <td style="text-align:right">${esc(sum.Position||'')}</td>
        <td>${esc(sum.Class||'')}</td>
        <td>${esc(sum.Grade||'')}</td>
        <td class="no-print" style="text-align:right"><button data-roll="${escAttr(s['Roll No']||'')}" class="action-btn">View</button></td>
      `;
      studentsTableBody.appendChild(tr);
    });
    $('studentCount').textContent = rows.length;
  }

  /* ---------- student report ---------- */
  function renderStudentReport(s){
    const subjects = s.subjects || [];
    const sum = s.Summary || {};
    const rows = subjects.map(sub => {
      const ca = Number(sub["C.A Test"]||0);
      const ex = Number(sub["EXAM"]||0);
      const total = ca + ex;
      return `<tr>
        <td style="min-width:220px">${escapeHtml(sub.name)}</td>
        <td style="text-align:right">${ca}</td>
        <td style="text-align:right">${ex}</td>
        <td style="text-align:right">${total}</td>
      </tr>`;
    }).join('');

    const percentage = sum.Percentage || '';
    const html = `
      <div class="report-header" style="margin-top:12px">
        <div style="flex:1">
          <div style="display:flex;gap:12px;align-items:center">
            <div class="student-photo">${(s.name||'').split(' ').map(n=>n[0]).slice(0,2).join('').toUpperCase()}</div>
            <div class="student-meta">
              <h2>${escapeHtml(s.name)}</h2>
              <div class="muted">Roll No: ${escapeHtml(s['Roll No']||'')}</div>
              <div class="muted" style="margin-top:6px">Sex: ${escapeHtml(sum.Sex||'')}</div>
              <div class="meta-grid" style="margin-top:10px">
                <div class="summary-box"><strong>Total</strong><div>${escapeHtml(sum.TOTAL||'')}</div></div>
                <div class="summary-box"><strong>Average</strong><div>${escapeHtml(sum.Average||'')}</div></div>
                <div class="summary-box"><strong>Grade</strong><div>${escapeHtml(sum.Grade||'')}</div></div>
                <div class="summary-box"><strong>Class</strong><div>${escapeHtml(sum.Class||'')}</div></div>
              </div>
            </div>
          </div>

          <div style="margin-top:14px" class="card">
            <table style="width:100%">
              <thead><tr><th>Subject</th><th style="text-align:right">C.A Test</th><th style="text-align:right">EXAM</th><th style="text-align:right">Total</th></tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>

        <div style="width:320px">
          <div class="summary-box" style="margin-bottom:12px">
            <h3>Summary</h3>
            <table style="width:100%">
              <tr><th style="text-align:left">Total</th><td style="text-align:right">${escapeHtml(sum.TOTAL||'')}</td></tr>
              <tr><th style="text-align:left">Average</th><td style="text-align:right">${escapeHtml(sum.Average||'')}</td></tr>
              <tr><th style="text-align:left">Position</th><td style="text-align:right">${escapeHtml(sum.Position||'')}</td></tr>
              <tr><th style="text-align:left">Present</th><td style="text-align:right">${escapeHtml(sum.Present||'')}</td></tr>
              <tr><th style="text-align:left">Percentage</th><td style="text-align:right">${escapeHtml(sum.Percentage||'')}</td></tr>
              <tr><th style="text-align:left">Total Mark Obtainable</th><td style="text-align:right">${escapeHtml(sum["Total Mark Obtainable"]||'')}</td></tr>
            </table>
          </div>

          <div class="card" style="padding:12px">
            <div style="font-weight:700">Remarks</div>
            <div class="muted" style="margin-top:8px">Well done — keep improving. (Editable area)</div>
          </div>
        </div>
      </div>
    `;

    $('reportArea').innerHTML = html;
    drawStudentChart(subjects);
  }

  /* ---------- charts ---------- */
  function renderSummary(){
    const counts = {};
    DATA.students.forEach(s => {
      const g = (s.Summary && s.Summary.Grade) || 'N/A';
      counts[g] = (counts[g] || 0) + 1;
    });
    const labels = Object.keys(counts);
    const values = labels.map(l => counts[l]);

    if(summaryChart) summaryChart.destroy();
    const ctx = summaryChartCanvas.getContext('2d');
    summaryChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Students by Grade',
          data: values,
          backgroundColor: labels.map(l => 'rgba(11,95,255,0.12)'),
          borderColor: labels.map(l => 'rgba(11,95,255,0.45)'),
          borderWidth: 1
        }]
      },
      options: {
        responsive:true,
        plugins:{legend:{display:false}},
        scales:{y:{beginAtZero:true}}
      }
    });

    // KPI updates
    const totalStudents = DATA.students.length;
    const avgPercent = averagePercentage();
    $('avgPercent').textContent = avgPercent ? (avgPercent + '%') : '—';
    $('topGradeCount').textContent = (DATA.students.filter(s=> (s.Summary && s.Summary.Grade) === 'A').length) || 0;
    $('gradeBreakdown').textContent = labels.map((l,i)=>`${l}: ${values[i]}`).join(' · ');
    $('presentNow').textContent = 'Present: ' + (DATA.students.filter(s=> (s.Summary && Number(s.Summary.Present))>0).length);
  }

  function drawStudentChart(subjects){
    const labels = subjects.map(s => s.name);
    const totals = subjects.map(s => Number(s["C.A Test"]||0) + Number(s["EXAM"]||0));
    if(studentChart) studentChart.destroy();
    studentChart = new Chart(studentChartCanvas.getContext('2d'), {
      type: 'radar',
      data: {
        labels,
        datasets: [{
          label: 'Scores',
          data: totals,
          fill: true,
          backgroundColor: 'rgba(11,95,255,0.12)',
          borderColor: 'rgba(11,95,255,0.9)',
          pointBackgroundColor: 'rgba(11,95,255,0.9)'
        }]
      },
      options: { responsive:true, scales:{r:{beginAtZero:true}}}
    });
  }

  /* ---------- utilities ---------- */
  function esc(s){ return s==null ? '' : String(s); }
  function escAttr(s){ return (s==null) ? '' : String(s).replace(/"/g,'&quot;'); }
  function escapeHtml(str){
    if(str==null) return '';
    return String(str).replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]); });
  }
  function escapeHtmlName(s){ return escapeHtml(s); }
  function averagePercentage(){
    const percents = DATA.students.map(s => {
      const p = s.Summary && s.Summary.Percentage ? String(s.Summary.Percentage).replace('%','') : '';
      return p !== '' && !isNaN(Number(p)) ? Number(p) : null;
    }).filter(x => x !== null);
    if(percents.length === 0) return null;
    const sum = percents.reduce((a,b)=>a+b,0);
    return Math.round((sum/percents.length)*10)/10;
  }
  // small safe helpers used above
  function escapeHtml(s){
    if(s==null) return '';
    return String(s).replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]); });
  }

  // kick off
  init();
})();
