@echo off
cls
@title git push

:1
cls
Chcp 936>nul
@echo.
@echo $ git status
@echo.
git status
@echo.
@echo $ git add .
@echo.
set /p a= $ git commit -m 
if "%a%"=="" (
    @echo description can not empty
    goto 1
)

Chcp 65001>nul
git status
@echo.
echo $ git add .
@echo.
echo $ git commit -m %a%
@echo.
echo $ git push 

::这里写git的命令
git add .
git commit -m %a%
git push
::这里写git的命令

@echo.
@echo.
@echo.
@echo git push completed
@echo.
@echo press any key to exit

pause>nul

exit