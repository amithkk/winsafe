initSidebarItems({"struct":[["ACCELF","`ACCELL` `fVirt` (`u8`). Originally has `F` prefix."],["ACCESS_RIGHTS","Standard access rights flags (`u32`). Originally has no prefix."],["AD","`HDC::SetArcDirection` `dir` (`i32`)."],["ADRF","`NMTVASYNCDRAW` `dwRetFlags` (`u32`). Don’t seem to be defined anywhere, unconfirmed values."],["APPCOMMAND","`WM_APPCOMMAND` commands (`u16`)."],["BCN","Button control `WM_NOTIFY` notifications (`i32`), convertible to `NM`."],["BCSIF","`BUTTON_SPLITINFO` `mask` (`u32`)."],["BCSS","`BUTTON_SPLITINFO` `uSplitStyle` (`u32`)."],["BI","`BITMAPINFOHEADER` `biCompression` (`u32`)."],["BIA","`BUTTON_IMAGELIST` `uAlign` (`u32`). Originally has `BUTTON_IMAGELIST_ALIGN_` prefix."],["BKMODE","`HDC::SetBkMode` `mode` (`i32`)."],["BM","Button control messages (`u32`), convertible to `WM`."],["BN","Button control `WM_COMMAND` notifications (`u16`), convertible to `CMD`."],["BS","Button control styles (`u32`), convertible to `WS`."],["BSS","`LOGBRUSH` `lbStyle` (`u32`). Originally has `BS` prefix."],["BST","`BM_GETCHECK` return value (`u32`)."],["CB","Combo box control messages (`u32`), convertible to `WM`."],["CBEM","ComboBoxEx control messages (`u32`), convertible to `WM`."],["CBES_EX","Extended combo box styles (`u32`), convertible to `WS_EX`."],["CBN","Combo box control `WM_COMMAND` notifications (`u16`), convertible to `CMD`."],["CBS","Combo box control styles (`u32`), convertible to `WS`."],["CC","`CHOOSECOLOR` `Flags` (`u32`)."],["CCM","Generic common controls messages (`u32`), convertible to `WM`."],["CDDS","`NMCUSTOMDRAW` `dwDrawStage` (`u32`)."],["CDIS","`NMCUSTOMDRAW` `uItemState` (`u32`)."],["CDRF","`NM_CUSTOMDRAW` return value (`u32`)."],["CDS","`ChangeDisplaySettings` `dwFlags` (`u32`)."],["CF","Standard clipboard formats (`u32`)."],["CHARSET","`LOGFONT` `lfCharset` (`u8`)."],["CLIP","`LOGFONT` `lfClipPrecision` (`u8`)."],["CLR","`IMAGELISTDRAWPARAMS` `rgbFg` (`u32`)."],["CLSCTX","`CLSCTX` enumeration (`u32`)."],["CMD","`WM_COMMAND` notification codes (`u16`)."],["COINIT","`COINIT` enumeration (`u32`)."],["COLOR","System colors (`i32`)."],["CP","`WideCharToMultiByte` and `MultiByteToWideChar` `CodePage` identifiers (`u32`)."],["CREATE","Process creation flags (`u32`)."],["CS","Window class `styles` (`u32`)."],["DDL","`CB_DIR` and `LB_DIR` attributes (`u16`)."],["DIB","`LOGBRUSH` `lbColor` (`u32`)."],["DISPOSITION","`HFILE::CreateFile` `dwCreationDisposition` (`u32`). Originally has no prefix."],["DISP_CHANGE","`ChangeDisplaySettings` return value (`u32`)."],["DLGID","Dialog built-in IDs (`u16`). These are also returned from `HWND::MessageBox` and `HWND::TaskDialog`."],["DM","`DEVMODE` `dmFields` (`u32`)."],["DMBIN","`DEVMODE` `dmDefaultSource` (`i16`)."],["DMCOLOR","`DEVMODE` `dmColor` (`i16`)."],["DMDFO","`DEVMODE` `dmDisplayFixedOutput` (`u32`)."],["DMDISPLAYFLAGS","`DEVMODE` `dmDisplayFlags` (`u32`)."],["DMDITHER","`DEVMODE` `dmDitherType` (`u32`)."],["DMDO","`DEVMODE` `dmDisplayOrientation` (`u32`)."],["DMDUP","`DEVMODE` `dmDuplex` (`i16`)."],["DMICM","`DEVMODE` `dmICMIntent` (`u32`)."],["DMICMMETHOD","`DEVMODE` `dmICMMethod` (`u32`)."],["DMMEDIA","`DEVMODE` `dmMediaType` (`u32`)."],["DMNUP","`DEVMODE` `dmNup` (`u32`)."],["DMORIENT","`DEVMODE` `dmOrientation` (`i16`)."],["DMPAPER","`DEVMODE` `dmPaperSize` (`i16`)."],["DMRES","`DEVMODE` `dmPrintQuality` (`i16`)."],["DMTT","`DEVMODE` `dmTTOption` (`i16`)."],["DTM","Date and time picker control messages (`u32`), convertible to `WM`."],["DTN","Date and time picker control `WM_NOTIFY` notifications (`i32`), convertible to `NM`."],["DTS","Date and time picker control styles (`u32`), convertible to `WS`."],["EDS","`EnumDisplaySettingsEx` `iModeNum` (`u32`)."],["EM","Edit control messages (`u32`), convertible to `WM`."],["EMF","`NMLVEMPTYMARKUP` `dwFlags` (`u32`)."],["EN","Edit control `WM_COMMAND` notifications (`u16`), convertible to `CMD`."],["ENDSESSION","`WM_ENDSESSION` event (`u32`)."],["ENUM_SETTINGS","`EnumDisplaySettingsEx` `dwFlags` (`u32`). Originally with `ENUM` prefix and `SETTINGS` suffix."],["ERROR","A Windows system error code (`u32`) retrieved by `GetLastError` function, or an `HRESULT`."],["ES","Edit control styles (`u32`), convertible to `WS`."],["FAPPCOMMAND","`WM_APPCOMMAND` input event (`u16`)."],["FF","`LOGFONT` `lfPitchAndFamily` (`u8`), used with `PITCH`."],["FILE_ATTRIBUTE","File attribute flags, also other flags from `HFILE::CreateFile` `dwFlagsAndAttributes` (`u32`)."],["FILE_MAP","`HFILEMAP::MapViewOfFile` `dwDesiredAccess` (`u32`)."],["FILE_RIGHT","File access rights flags (`u32`). Originally has `FILE` prefix."],["FILE_SHARE","`HFILE::CreateFile` `dwShareMode` (`u32`)."],["FILE_STARTING_POINT","`HFILE::SetFilePointerEx` `dwMoveMethod` (`u32`). Originally has `FILE` prefix."],["FILE_TYPE","`HFILE::GetFileType` return value (`u32`)."],["FO","`SHFILEOPSTRUCT` `wFunc` (`u32`)."],["FOF","`SHFILEOPSTRUCT` `fFlags` (`u16`)."],["FORMAT_MESSAGE","`FormatMessage` `dwFlags` (`u32`)."],["FW","`LOGFONT` `lfWeight` (`u32`)."],["GA","`HWND::GetAncestor` `gaFlags` (`u32`)."],["GCLP","`HWND::GetClassLongPtr` `nIndex` (`i32`). Originally has prefixes `GCW` and `GCL` also."],["GDC","`HDC::GetDeviceCaps` `index` (`i32`). Originally has no prefix."],["GDT","`NMDATETIMECHANGE` and `NMDATETIMESTRING` `dwFlags` (`u32`)."],["GDTR","`DTM_GETRANGE` return value (`u32`)."],["GENERIC","Generic access rights flags (`u32`)."],["GM","`HDC::SetGraphicsMode` `iMode` (`i32`)."],["GMEM","`HGLOBAL::GlobalAlloc` `uFlags` (`u32`)."],["GR","`HPROCESS::GetGuiResources` `uiFlags` (`u32`)."],["GUI","`GUITHREADINFO` `flags` (`u32`)."],["GW","`HWND::GetWindow` `uCmd` (`u32`)."],["GWLP","`HWND::GetWindowLongPtr` and `HWND::SetWindowLongPtr` `nIndex` (`i32`). Originally has prefix `GWL` also."],["GWL_C","`WM_STYLECHANGED` and `WM_STYLECHANGING` change (`i8`). Originally has `GWL` prefix."],["HDM","Header control messages (`u32`), convertible to `WM`."],["HDN","Header control `WM_NOTIFY` notifications (`i32`), convertible to `NM`."],["HDS","Header control styles (`u32`), convertible to `WS`."],["HELPINFO","`HELPINFO` `iContextType` (`i32`)."],["HELPW","`HWND::WinHelp` `uCommand` (`u32`)."],["HICF","NMBCHOTITEM `dwFlags` (`u32`)."],["HS","`HBRUSH::CreateHatchBrush` `iHatch` (`i32`)."],["HT","`WM_NCHITTEST`, `WM_SETCURSOR` `hit_test` (`u16`)."],["HWND_PLACE","`HWND::SetWindowPos` `hWndInsertAfter` (`isize`)."],["ICON_SZ","`WM_SETICON` icon size (`u8`). Originally has `ICON` prefix."],["IDC","`HINSTANCE::LoadCursor` `lpCursorName` (`isize`)."],["IDI","`HINSTANCE::LoadIcon` `lpIconName` (`isize`)."],["ILC","`HIMAGELIST::Create` `flags` (`u32`)."],["ILD","`IMAGELISTDRAWFLAGS` enumeration (`u32`)."],["ILS","`IMAGELISTSTATEFLAGS` enumeration (`u32`)."],["IMAGE_TYPE","`BM_GETIMAGE` `img_type` (`u8`). Originally has `IMAGE` prefix."],["IPM","IP address control messages (`u32`), convertible to `WM`."],["IPN","IP address control `WM_NOTIFY` notifications (`i32`), convertible to `NM`."],["KEY","`HKEY::RegOpenKeyEx` `samDesired` (`u32`)."],["LANG","Language identifier (`u16`)."],["LB","List box control messages (`u32`), convertible to `WM`."],["LBN","List box control `WM_COMMAND` notifications (`u16`), convertible to `CMD`."],["LBS","List box control styles (`u32`), convertible to `WS`."],["LIF","`LITEM` `mask` (`u32`)."],["LIS","`LITEM` `state` (`u32`)."],["LLMHF","`MSLLHOOKSTRUCT` `flags` (`u32`)."],["LM","SysLink control messages (`u32`), convertible to `WM`."],["LR","`HINSTANCE::LoadImageBitmap`, `HINSTANCE::LoadImageCursor` and `HINSTANCE::LoadImageIcon` `fuLoad`."],["LSFW","`LockSetForegroundWindow` `uLockCode` (`u32`)."],["LVA","`LVM_ARRANGE` arrangement (`u16`)."],["LVCDI","`NMLVCUSTOMDRAW` `dwItemType` (`u32`)."],["LVCF","`LVCOLUMN` `mask` (`u32`)."],["LVCFMT_C","`LVCOLUMN` `mask` (`i32`)."],["LVCFMT_I","`LVITEM` `piColFmt` (`i32`)."],["LVFI","`LVFINDINFO` `flags` (`u32`)."],["LVGA_HEADER","`NMLVCUSTOMDRAW` `uAlign` (`u32`)."],["LVGIT","`NMLVGETINFOTIP` `dwFlags` (`u32`)."],["LVHT","`LVHITTESTINFO` `flags` (`u32`)."],["LVIF","`LVITEM` `mask` (`u32`)."],["LVIR","`LVM_GETITEMRECT` `portion` (`u8`)."],["LVIS","ListView item states (`u32`)."],["LVI_GROUPID","`LVITEM` `iGroupId` (`i32`)."],["LVKF","`NMITEMACTIVATE` `uKeyFlags` (`u32`)."],["LVM","List view control messages (`u32`), convertible to `WM`."],["LVN","List view control `WM_NOTIFY` notifications (`i32`), convertible to `NM`."],["LVNI","`LVM_GETNEXTITEM` relationship (`u32`)."],["LVS","List view control styles (`u32`), convertible to `WS`."],["LVSIL","`LVM_GETIMAGELIST` `kind` (`u8`)."],["LVS_EX","Extended list view control styles (`u32`), convertible to `WS_EX`."],["LV_VIEW","ListView views (`u32`)."],["LWS","SysLink control styles (`u32`), convertible to `WS`."],["MB","`HWND::MessageBox` `uType` (`u32`)."],["MBC","`MultiByteToWideChar` `dwFlags` (`u32`). Originally has `MB` prefix."],["MCM","Month calendar control messages (`u32`), convertible to `WM`."],["MCMV","`NMVIEWCHANGE` `dwOldView` and `dwNewView` (`u32`)."],["MCN","Month calendar control `WM_NOTIFY` notifications (`i32`), convertible to `NM`."],["MCS","Month calendar control styles (`u32`), convertible to `WS`."],["MCSC","`DTM_GETMCCOLOR` color (`u8`)."],["MF","`HMENU::AppendMenu` `uFlags` (`u32`)."],["MFS","`MENUITEMINFO` `fState` (`u32`)."],["MFT","`MENUITEMINFO` `fType` (`u32`)."],["MIIM","`MENUITEMINFO` `fMask` (`u32`)."],["MIM","`MENUINFO` `fMask` (`u32`)."],["MK","`WM_LBUTTONDOWN` (and similar) virtual keys (`u16`)."],["MND","`WM_MENUDRAG` return value."],["MNS","`MENUINFO` `dwStyle` (`u32`)."],["MSGF","`WM_ENTERIDLE` reason (`u8`)."],["NIF","`NOTIFYICONDATA` `uFlags` (`u32`)."],["NIIF","`NOTIFYICONDATA` `dwInfoFlags` (`u32`)."],["NIM","`Shell_NotifyIcon` `dwMessage` (`u32`)."],["NIS","`NOTIFYICONDATA` `dwState` and `dwStateFlags` (`u32`)."],["NM","`WM_NOTIFY` notification codes (`i32`)."],["OCR","`HCURSOR::SetSystemCursor` `id` (`u32`)."],["ODA","`DRAWITEMSTRUCT` `itemAction` (`u32`)."],["ODS","`DRAWITEMSTRUCT` `itemState` (`u32`)."],["ODT","`DRAWITEMSTRUCT` `CtlType` (`u32`)."],["ODT_C","`COMPAREITEMSTRUCT` and `DELETEITEMSTRUCT` `CtlType` (`u32`). Originally has `ODT` prefix."],["OUT_PRECIS","`LOGFONT` `lfOutPrecision` (`u8`)."],["PAGE","`HFILE::CreateFileMapping` `flProtect` (`u32`)."],["PBM","Progress bar control messages (`u32`), convertible to `WM`."],["PBS","Progress bar control styles (`u32`), convertible to `WS`."],["PBST","Progress bar states (`u32`)."],["PITCH","`LOGFONT` `lfPitchAndFamily` (`u8`), used with `FF`."],["PM","`PeekMessage` `wRemoveMsg` (`u32`)."],["PROCESSOR","`SYSTEM_INFO` `dwProcessorType` (`u32`)."],["PROCESSOR_ARCHITECTURE","`SYSTEM_INFO` `wProcessorArchitecture` (`u16`)."],["PS","`HPEN::CreatePen` `iStyle` (`i32`)."],["QS","`GetQueueStatus` `flags` (`u32`)."],["QUALITY","`LOGFONT` `lfQuality` (`u8`)."],["RB","Rebar control messages (`u32`), convertible to `WM`."],["RBN","Rebar control `WM_NOTIFY` notifications (`i32`), convertible to `NM`."],["RBS","Rebar control styles (`u32`), convertible to `WS`."],["RDW","`HWND::RedrawWindow` `flags` (`u32`)."],["REG","Registry value types (`u32`)."],["REGION","`HWND::GetUpdateRgn`, `HWND::GetWindowRgn` and `HDC::SelectObjectRgn` return value (`i32`)."],["REG_OPTION","`HKEY::RegOpenKeyEx` `uOptions` (`u32`)."],["ROP","Raster operation code (`u32`). `HDC::BitBlt` `rop`, `HDC::PatBlt` `rop` and `IMAGELISTDRAWPARAMS` `dwRop`. Originally has no prefix."],["RRF","`HKEY::RegGetValue` `dwFlags` (`u32`)."],["RT","Predefined resource types (`u16`)."],["SB","Status bar control messages (`u32`). Convertible to `WM`."],["SBARS","Status bar control styles (`u32`), convertible to `WS`."],["SBB","`HWND::GetScrollInfo`, `HWND::SetScrollInfo` and `HWND::SetScrollRange` `nBar` (`i32`). Originally has `SB` prefix."],["SBN","Status bar control `WM_NOTIFY` notifications (`i32`), convertible to `NM`."],["SBT","`SB_GETTEXT`, `SB_GETTEXTLENGTH` and `SB_SETTEXT` drawing operation (`u16`)."],["SB_REQ","`WM_HSCROLL` and `WM_VSCROLL` request (`u16`). Originally has `SB` prefix."],["SC","`WM_SYSCOMMAND` type of system command requested (`u32`)."],["SCS","`GetBinaryType` return value (`u32`)."],["SECTION","Composes `FILE_MAP` (`u32`)."],["SE_ERR","`HWND::ShellExecute` return value (`u32`)."],["SHARD","`SHARD` enumeration (`u32`)."],["SHGFI","`SHGetFileInfo` `uFlags` (`u32`)."],["SIF","`SCROLLINFO` `fMask` (`u32`)."],["SIZE_R","`WM_SIZE` request (`u8`)."],["SM","`GetSystemMetrics` `nIndex` (`i32`)."],["SORT","Sort order identifiers (`u16`)."],["SPI","`SystemParametersInfo` `uiAction` (`u32`)."],["SPIF","`SystemParametersInfo` `fWinIni` (`u32`)."],["SS","Label control styles (`u32`), convertible to `WS`."],["STANDARD_RIGHTS","Standard access rights flags (`u32`)."],["STAP","`HTHEME::GetThemeAppProperties` return value (`u32`)."],["STARTF","`HPROCESS::CreateProcess` `dwFlags` (`u32`)."],["STATE_SYSTEM","`DATETIMEPICKERINFO` `stateCheck` and `stateButton`, `TITLEBARINFOEX` `rgstate` (`u32`)."],["STM","Static control messages (`u32`), convertible to `WM`."],["STN","Static control `WM_COMMAND` notifications (`u16`), convertible to `CMD`."],["STOCK_BRUSH","`HBRUSH::GetStockBrush` `i` (`i32`)."],["STOCK_FONT","`HFONT::GetStockBrush` `i` (`i32`)."],["STOCK_PEN","`HPEN::GetStockBrush` `i` (`i32`)."],["SUBLANG","Sublanguage identifier (`u16`)."],["SW","`HWND::ShowWindow` `nCmdShow` (`i32`)."],["SWP","`HWND::SetWindowPos` `uFlags` (`u32`)."],["SW_S","`WM_SHOWWINDOW` status (`u8`). Originally has `SW` prefix."],["TA","`HDC::SetTextAlign` `align` (`u32`). Also includes constants with `VTA` prefix."],["TB","`NMTRBTHUMBPOSCHANGING` `nReason` (`i32`)."],["TBM","Toolbar control messages (`u32`), convertible to `WM`. Originally has `TB` prefix."],["TBN","Toolbar control `WM_NOTIFY` notifications (`i32`), convertible to `NM`."],["TBS","Trackbar control styles (`u32`), convertible to `WS`."],["TCIS","Tab control item states (`u32`)."],["TCM","Tab control messages (`u32`), convertible to `WM`."],["TCN","Tab control `WM_NOTIFY` notifications (`i32`), convertible to `NM`."],["TCS","Tab control styles (`u32`), convertible to `WS`."],["TCS_EX","Extended tab control styles (`u32`), convertible to `WS_EX`."],["TDCBF","`HWND::TaskDialog` and `TASKDIALOGCONFIG` `dwCommonButtons` (`i32`). Originally has `TDCBF` prefix and `BUTTON` suffix."],["TDF","`TASKDIALOGCONFIG` `dwFlags` (`i32`)."],["TD_ICON","`HWND::TaskDialog` `pszIcon` and `TASKDIALOGCONFIG` `pszMainIcon` (`isize`). Originally has `TD` prefix and `ICON` suffix."],["TH32CS","`HPROCESSLIST::CreateToolhelp32Snapshot` `dwFlags` (`u32`)."],["THREAD_CREATE","`HTHREAD::CreateThread` `dwFlags` (`u32`). Originally has no prefix."],["TME","`TrackMouseEvent` `dwFlags` (`u32`)."],["TMT","Theme property identifiers (`i32`)."],["TPM","`TrackPopupMenu` `uFlags` (`u32`)."],["TRBM","Trackbar control messages (`u32`), convertible to `WM`. Originally has `TBM` prefix."],["TRBN","Trackbar control `WM_NOTIFY` notifications (`i32`), convertible to `NM`."],["TVE","`TVM_EXPAND` `action` (`u32`)."],["TVGN","`TVM_GETNEXTITEM` `which` (`u32`)."],["TVI","`TVINSERTSTRUCT` `hInsertAfter` (`isize`)."],["TVIF","`TVITEM` `mask` (`u32`)."],["TVIS","Tree view item states (`u32`)"],["TVIS_EX","`TVITEMEX` `uStateEx` (`u32`)."],["TVM","Tree view control messages (`u32`), convertible to `WM`."],["TVN","Tree view control `WM_NOTIFY` notifications (`i32`), convertible to `NM`."],["TVS","Tree view control styles (`u32`), convertible to `WS`."],["TVSIL","`TVM_GETIMAGELIST` and `TVM_SETIMAGELIST` `kind`."],["TVS_EX","Extended tree view control styles (`u32`), convertible to `WS_EX`."],["UDM","Up-down control messages (`u32`), convertible to `WM`."],["UDN","Up-down control `WM_NOTIFY` notifications (`i32`), convertible to `NM`."],["UDS","Up-down control styles (`u32`), convertible to `WS`."],["VER_COND","`VerSetConditionMask` `Condition` (`u8`)."],["VER_MASK","`VerSetConditionMask` `TypeMask` (`u32`)."],["VER_NT","`OSVERSIONINFOEX` `wProductType` (`u8`)."],["VER_PLATFORM","`OSVERSIONINFOEX` `dwPlatformId` (`u32`)."],["VER_SUITE","`OSVERSIONINFOEX` `wSuiteMask` (`u16`)."],["VFT","`VS_FIXEDFILEINFO` `dwFileType` (`u32`)."],["VFT2","`VS_FIXEDFILEINFO` `dwFileSubType` (`u32`)."],["VK","Virtual key codes (`u16`)."],["VK_DIR","`LVFINDINFO` `vkDirection` (`u16`)."],["VOS","`VS_FIXEDFILEINFO` `dwFileOS` (`u32`)."],["VS","Visual style parts and states. These are originally two separated constant types, but since they form a hierarchy, one single constant type can represent both part and state."],["VS_FF","`VS_FIXEDFILEINFO` `dwFileFlags` (`u32`)."],["WA","`WM_ACTIVATE` activation state (`u16`)."],["WAIT","`HPROCESS::WaitForSingleObject` return value (`u32`)."],["WC","`WideCharToMultiByte` `dwFlags` (`u32`)."],["WDA","`HWND::GetWindowDisplayAffinity` and `HWND::SetWindowDisplayAffinity` `dwAffinity` (`u32`)."],["WH","`HHOOK::SetWindowsHookEx` `idHook` (`i32`)."],["WIN32","`_WIN32` version definitions (`u16`)."],["WM","Window message codes (`u32`)."],["WMPN","`WM_PARENTNOFITY` event (`u16`)."],["WMSZ","`WM_SIZING` window edge (`u8`)."],["WPF","`WINDOWPLACEMENT` `flags` (`u32`)."],["WS","Window styles (`u32`)."],["WS_EX","Extended window styles (`u32`)."],["WVR","`WM_NCCALCSIZE` return flags (`u32`)."]]});