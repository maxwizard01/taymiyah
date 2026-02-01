Sub ExportEachSheetNamedAsSheet()

    Dim ws As Worksheet
    Dim newWb As Workbook
    Dim savePath As String
    Dim fileName As String

    Application.ScreenUpdating = False
    Application.DisplayAlerts = False

    'Loop through all worksheets
    For Each ws In ThisWorkbook.Worksheets

        'Skip hidden sheets (optional)
        If ws.Visible = xlSheetVisible Then

            'Use worksheet name as file name
            fileName = ws.Name & ".xlsx"
            savePath = ThisWorkbook.Path & "\" & fileName

            'Copy worksheet to new workbook
            ws.Copy
            Set newWb = ActiveWorkbook

            'Convert formulas to values
            With newWb.Sheets(1).UsedRange
                .Value = .Value
            End With

            'Save and close
            newWb.SaveAs fileName:=savePath, FileFormat:=xlOpenXMLWorkbook
            newWb.Close False

        End If

    Next ws

    Application.DisplayAlerts = True
    Application.ScreenUpdating = True

    MsgBox "All sheets have been exported and named using their sheet names.", vbInformation

End Sub

