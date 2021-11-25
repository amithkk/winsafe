initSidebarItems({"struct":[["ACCELF","`ACCELL` `fVirt` (`u8`). Originally has `F` prefix."],["ACCESS_RIGHTS","Standard access rights flags (`u32`). Originally has no prefix."],["AD","`HDC::SetArcDirection` `dir` (`i32`)."],["ADRF","`NMTVASYNCDRAW` `dwRetFlags` (`u32`). Don’t seem to be defined anywhere unconfirmed values."],["APPCOMMAND","`wm::AppCommand` commands (`u16`)."],["BCN","Button control `WM_NOTIFY` notifications (`i32`) convertible to `NM`."],["BCSIF","`BUTTON_SPLITINFO` `mask` (`u32`)."],["BCSS","`BUTTON_SPLITINFO` `uSplitStyle` (`u32`)."],["BI","`BITMAPINFOHEADER` `biCompression` (`u32`)."],["BIA","`BUTTON_IMAGELIST` `uAlign` (`u32`). Originally has `BUTTON_IMAGELIST_ALIGN_` prefix."],["BKMODE","`HDC::SetBkMode` `mode` (`i32`)."],["BM","Button control messages (`u32`) convertible to `WM`."],["BN","Button control `WM_COMMAND` notifications (`u16`) convertible to `CMD`."],["BS","Button control styles (`u32`) convertible to `WS`."],["BSS","`LOGBRUSH` `lbStyle` (`u32`). Originally has `BS` prefix."],["BST","`bm::GetCheck` return value (`u32`)."],["BTNS","Toolbar control styles (`u8`) convertible to `WS`."],["CB","Combo box control messages (`u32`) convertible to `WM`."],["CBEM","ComboBoxEx control messages (`u32`) convertible to `WM`."],["CBES_EX","Extended combo box styles (`u32`) convertible to `WS_EX`."],["CBN","Combo box control `WM_COMMAND` notifications (`u16`) convertible to `CMD`."],["CBS","Combo box control styles (`u32`) convertible to `WS`."],["CC","`CHOOSECOLOR` `Flags` (`u32`)."],["CCM","Generic common controls messages (`u32`) convertible to `WM`."],["CDDS","`NMCUSTOMDRAW` `dwDrawStage` (`u32`)."],["CDERR","Common dialog box error codes. Also includes `PDERR`, `CFERR, `FNERR`and`FRERR` prefixes."],["CDIS","`NMCUSTOMDRAW` `uItemState` (`u32`)."],["CDRF","`NM_CUSTOMDRAW` return value (`u32`)."],["CDS","`ChangeDisplaySettings` `flags` (`u32`)."],["CF","Standard clipboard formats (`u32`)."],["CHARSET","`HFONT::CreateFont` `char_set` and `LOGFONT` `lfCharset` (`u8`)."],["CLIP","`HFONT::CreateFont` `clip_precision` and `LOGFONT` `lfClipPrecision` (`u8`)."],["CLR","`IMAGELISTDRAWPARAMS` `rgbFg` (`u32`)."],["CLSCTX","`CLSCTX` enumeration (`u32`)."],["CMD","`wm::Command` notification codes (`u16`)."],["COINIT","`COINIT` enumeration (`u32`)."],["COLOR","System colors (`i32`)."],["CP","`WideCharToMultiByte` and `MultiByteToWideChar` `code_page` identifiers (`u16`)."],["CREATE","Process creation flags (`u32`)."],["CS","Window class `styles` (`u32`)."],["DDL","`cb::Dir` and `lb::Dir` attributes (`u16`)."],["DIB","`LOGBRUSH` `lbColor` (`u32`)."],["DISPOSITION","`HFILE::CreateFile` `creation_disposition` (`u32`). Originally has no prefix."],["DISP_CHANGE","`ChangeDisplaySettings` return value (`u32`)."],["DLGC","`wm::GetDlgCode` return value (`u16`)."],["DLGID","Dialog built-in IDs (`u16`). These are also returned from `HWND::MessageBox` and `HWND::TaskDialog`."],["DM","`DEVMODE` `dmFields` (`u32`)."],["DMBIN","`DEVMODE` `dmDefaultSource` (`i16`)."],["DMCOLOR","`DEVMODE` `dmColor` (`i16`)."],["DMDFO","`DEVMODE` `dmDisplayFixedOutput` (`u32`)."],["DMDISPLAYFLAGS","`DEVMODE` `dmDisplayFlags` (`u32`)."],["DMDITHER","`DEVMODE` `dmDitherType` (`u32`)."],["DMDO","`DEVMODE` `dmDisplayOrientation` (`u32`)."],["DMDUP","`DEVMODE` `dmDuplex` (`i16`)."],["DMICM","`DEVMODE` `dmICMIntent` (`u32`)."],["DMICMMETHOD","`DEVMODE` `dmICMMethod` (`u32`)."],["DMMEDIA","`DEVMODE` `dmMediaType` (`u32`)."],["DMNUP","`DEVMODE` `dmNup` (`u32`)."],["DMORIENT","`DEVMODE` `dmOrientation` (`i16`)."],["DMPAPER","`DEVMODE` `dmPaperSize` (`i16`)."],["DMRES","`DEVMODE` `dmPrintQuality` (`i16`)."],["DMTT","`DEVMODE` `dmTTOption` (`i16`)."],["DTM","Date and time picker control messages (`u32`) convertible to `WM`."],["DTN","Date and time picker control `WM_NOTIFY` notifications (`i32`) convertible to `NM`."],["DTS","Date and time picker control styles (`u32`) convertible to `WS`."],["EDS","`EnumDisplaySettingsEx` `flags` (`u32`)."],["EIMES","`em::GetImeStatus` return value (`u16`)."],["EM","Edit control messages (`u32`) convertible to `WM`."],["EMF","`NMLVEMPTYMARKUP` `dwFlags` (`u32`)."],["EN","Edit control `WM_COMMAND` notifications (`u16`) convertible to `CMD`."],["ENDSESSION","`wm::EndSession` event (`u32`)."],["ENUM_SETTINGS","`EnumDisplaySettingsEx` `mode_num` (`u32`). Originally with `ENUM` prefix and `SETTINGS` suffix."],["ERROR","A Windows system error code (`u32`) retrieved by `GetLastError` function, or an `HRESULT`."],["ES","Edit control styles (`u32`) convertible to `WS`."],["FAPPCOMMAND","`wm::AppCommand` input event (`u16`)."],["FF","`LOGFONT` `lfPitchAndFamily` (`u8`) used with `PITCH`."],["FILE_ATTRIBUTE","File attribute flags, also other flags from `HFILE::CreateFile` `flags_and_attrs` (`u32`)."],["FILE_MAP","`HFILEMAP::MapViewOfFile` `desired_access` (`u32`)."],["FILE_RIGHT","File access rights flags (`u32`). Originally has `FILE` prefix."],["FILE_SHARE","`HFILE::CreateFile` `share_mode` (`u32`)."],["FILE_STARTING_POINT","`HFILE::SetFilePointerEx` `move_method` (`u32`). Originally has `FILE` prefix."],["FILE_TYPE","`HFILE::GetFileType` return value (`u32`)."],["FIRMWARE_TYPE","`FIRMWARE_TYPE` enumeration (`u32`)."],["FO","`SHFILEOPSTRUCT` `wFunc` (`u32`)."],["FOF","`SHFILEOPSTRUCT` `fFlags` (`u16`)."],["FORMAT_MESSAGE","`FormatMessage` `dwFlags` (`u32`)."],["FW","`HFONT::CreateFont` `weight` and `LOGFONT` `lfWeight` (`u32`)."],["GA","`HWND::GetAncestor` `flags` (`u32`)."],["GCLP","`HWND::GetClassLongPtr` `index` (`i32`). Originally has prefixes `GCW` and `GCL` also."],["GDC","`HDC::GetDeviceCaps` `index` (`i32`). Originally has no prefix."],["GDT","`NMDATETIMECHANGE` and `NMDATETIMESTRING` `dwFlags` (`u32`)."],["GDTR","`dtm::GetRange` return value (`u32`)."],["GENERIC","Generic access rights flags (`u32`)."],["GM","`HDC::SetGraphicsMode` `mode` (`i32`)."],["GMDI","`HMENU::GetMenuDefaultItem` `flags` (`u32`)."],["GMEM","`HGLOBAL::GlobalAlloc` and `HGLOBAL::GlobalReAlloc` `flags` (`u32`)."],["GR","`HPROCESS::GetGuiResources` `flags` (`u32`)."],["GUI","`GUITHREADINFO` `flags` (`u32`)."],["GW","`HWND::GetWindow` `cmd` (`u32`)."],["GWLP","`HWND::GetWindowLongPtr` and `HWND::SetWindowLongPtr` `index` (`i32`). Originally has prefix `GWL` also."],["GWL_C","`wm::StyleChanged` and `wm::StyleChanging` change (`i8`). Originally has `GWL` prefix."],["HDM","Header control messages (`u32`) convertible to `WM`."],["HDN","Header control `WM_NOTIFY` notifications (`i32`) convertible to `NM`."],["HDS","Header control styles (`u32`) convertible to `WS`."],["HELPINFO","`HELPINFO` `iContextType` (`i32`)."],["HELPW","`HWND::WinHelp` `uCommand` (`u32`)."],["HICF","NMBCHOTITEM `dwFlags` (`u32`)."],["HS","`HBRUSH::CreateHatchBrush` `hatch` (`i32`)."],["HT","`wm::NcHitTest`, `wm::SetCursor` `hit_test` (`u16`)."],["HWND_PLACE","`HWND::SetWindowPos` `hWndInsertAfter` (`isize`)."],["ICON_SZ","`wm::SetIcon` icon size (`u8`). Originally has `ICON` prefix."],["IDB","`TBADDBITMAP` `nID` (`usize`)."],["IDC","`HINSTANCE::LoadCursor` `lpCursorName` (`isize`)."],["IDI","`HINSTANCE::LoadIcon` `lpIconName` (`isize`)."],["ILC","`HIMAGELIST::Create` `flags` (`u32`)."],["ILD","`IMAGELISTDRAWFLAGS` enumeration (`u32`)."],["ILS","`IMAGELISTSTATEFLAGS` enumeration (`u32`)."],["IMAGE_TYPE","`bm::GetImage` `img_type` (`u8`). Originally has `IMAGE` prefix."],["IPM","IP address control messages (`u32`) convertible to `WM`."],["IPN","IP address control `WM_NOTIFY` notifications (`i32`) convertible to `NM`."],["ISMEX","`InSendMessageEx` return value (`u32`)."],["KEY","`HKEY::OpenKeyEx` `access_rights` (`u32`)."],["LANG","Language identifier (`u16`)."],["LB","List box control messages (`u32`) convertible to `WM`."],["LBN","List box control `WM_COMMAND` notifications (`u16`) convertible to `CMD`."],["LBS","List box control styles (`u32`) convertible to `WS`."],["LIF","`LITEM` `mask` (`u32`)."],["LIS","`LITEM` `state` (`u32`)."],["LLMHF","`MSLLHOOKSTRUCT` `flags` (`u32`)."],["LM","SysLink control messages (`u32`) convertible to `WM`."],["LR","`HINSTANCE::LoadImageBitmap`, `HINSTANCE::LoadImageCursor` and `HINSTANCE::LoadImageIcon` `load`."],["LSFW","`LockSetForegroundWindow` `lock_code` (`u32`)."],["LVA","`lvm::Arrange` arrangement (`u16`)."],["LVCDI","`NMLVCUSTOMDRAW` `dwItemType` (`u32`)."],["LVCF","`LVCOLUMN` `mask` (`u32`)."],["LVCFMT_C","`LVCOLUMN` `mask` (`i32`)."],["LVCFMT_I","`LVITEM` `piColFmt` (`i32`)."],["LVFI","`LVFINDINFO` `flags` (`u32`)."],["LVGA_HEADER","`NMLVCUSTOMDRAW` `uAlign` (`u32`)."],["LVGIT","`NMLVGETINFOTIP` `dwFlags` (`u32`)."],["LVHT","`LVHITTESTINFO` `flags` (`u32`)."],["LVIF","`LVITEM` `mask` (`u32`)."],["LVIR","`lvm::GetItemRect` `portion` (`u8`)."],["LVIS","ListView item states (`u32`)."],["LVI_GROUPID","`LVITEM` `iGroupId` (`i32`)."],["LVKF","`NMITEMACTIVATE` `uKeyFlags` (`u32`)."],["LVM","List view control messages (`u32`) convertible to `WM`."],["LVN","List view control `WM_NOTIFY` notifications (`i32`) convertible to `NM`."],["LVNI","`lvm::GetNextItem` relationship (`u32`)."],["LVS","List view control styles (`u32`) convertible to `WS`."],["LVSIL","`lvm::GetImageList` `kind` (`u8`)."],["LVS_EX","Extended list view control styles (`u32`) convertible to `WS_EX`."],["LV_VIEW","ListView views (`u32`)."],["LWS","SysLink control styles (`u32`) convertible to `WS`."],["MB","`HWND::MessageBox` `flags` (`u32`)."],["MBC","`MultiByteToWideChar` `flags` (`u32`). Originally has `MB` prefix."],["MCM","Month calendar control messages (`u32`) convertible to `WM`."],["MCMV","`NMVIEWCHANGE` `dwOldView` and `dwNewView` (`u32`)."],["MCN","Month calendar control `WM_NOTIFY` notifications (`i32`) convertible to `NM`."],["MCS","Month calendar control styles (`u32`) convertible to `WS`."],["MCSC","`dtm::GetMcColor` color (`u8`)."],["MF","`HMENU::AppendMenu` `flags`, `HMENU::GetMenuState` return value, `HWND::HiliteMenuItem` `hilite` (`u32`)."],["MFS","`MENUITEMINFO` `fState` (`u32`)."],["MFT","`MENUITEMINFO` `fType` (`u32`)."],["MIIM","`MENUITEMINFO` `fMask` (`u32`)."],["MIM","`MENUINFO` `fMask` (`u32`)."],["MK","`wm::LButtonDown` (and similar) virtual keys (`u16`)."],["MND","`wm::MenuDrag` return value."],["MNS","`MENUINFO` `dwStyle` (`u32`)."],["MONITOR","`HMONITOR::MonitorFromPoint`, `HMONITOR::MonitorFromRect`, `HWND::MonitorFromWindow` flags (`u32`)."],["MONITORINFOF","`MONITORINFO` `dwFlags` (`u32`)."],["MSGF","`wm::EnterIdle` reason (`u8`)."],["NIF","`NOTIFYICONDATA` `uFlags` (`u32`)."],["NIIF","`NOTIFYICONDATA` `dwInfoFlags` (`u32`)."],["NIM","`Shell_NotifyIcon` `message` (`u32`)."],["NIS","`NOTIFYICONDATA` `dwState` and `dwStateFlags` (`u32`)."],["NM","`wm::Notify` notification codes (`i32`)."],["OBJID","`HWND::GetMenuBarInfo` `idObject` (`i32`)."],["OCR","`HCURSOR::SetSystemCursor` `id` (`u32`)."],["ODA","`DRAWITEMSTRUCT` `itemAction` (`u32`)."],["ODS","`DRAWITEMSTRUCT` `itemState` (`u32`)."],["ODT","`DRAWITEMSTRUCT` `CtlType` (`u32`)."],["ODT_C","`COMPAREITEMSTRUCT` and `DELETEITEMSTRUCT` `CtlType` (`u32`). Originally has `ODT` prefix."],["OUT_PRECIS","`HFONT::CreateFont` `out_precision` and `LOGFONT` `lfOutPrecision` (`u8`)."],["PAGE","`HFILE::CreateFileMapping` `protect` (`u32`)."],["PBM","Progress bar control messages (`u32`) convertible to `WM`."],["PBS","Progress bar control styles (`u32`) convertible to `WS`."],["PBST","Progress bar states (`u32`)."],["PITCH","`HFONT::CreateFont` `pitch_and_family` and `LOGFONT` `lfPitchAndFamily` (`u8`) used with `FF`."],["PM","`PeekMessage` `remove_msg` (`u32`)."],["PROCESS","Process security and access rights (`u32`)."],["PROCESSOR","`SYSTEM_INFO` `dwProcessorType` (`u32`)."],["PROCESSOR_ARCHITECTURE","`SYSTEM_INFO` `wProcessorArchitecture` (`u16`)."],["PROCESS_NAME","`QueryFullProcessImageName` flags (`u32`)."],["PS","`HPEN::CreatePen` `style` (`i32`)."],["QS","`GetQueueStatus` `flags` (`u32`)."],["QUALITY","`HFONT::CreateFont` `quality` and `LOGFONT` `lfQuality` (`u8`)."],["RB","Rebar control messages (`u32`) convertible to `WM`."],["RBN","Rebar control `WM_NOTIFY` notifications (`i32`) convertible to `NM`."],["RBS","Rebar control styles (`u32`) convertible to `WS`."],["RDW","`HWND::RedrawWindow` `flags` (`u32`)."],["REG","Registry value types (`u32`)."],["REGION","`HWND::GetUpdateRgn`, `HWND::GetWindowRgn` and `HDC::SelectObjectRgn` return value (`i32`)."],["REG_OPTION","`HKEY::OpenKeyEx` `options` (`u32`)."],["REPLACEFILE","`ReplaceFile` `flags` (`u32`)."],["ROP","Raster operation code (`u32`). `HDC::BitBlt` `rop`, `HDC::PatBlt` `rop` and `IMAGELISTDRAWPARAMS` `dwRop`. Originally has no prefix."],["RRF","`HKEY::GetValue` `dwFlags` (`u32`)."],["RT","Predefined resource types (`u16`)."],["SB","Status bar control messages (`u32`). Convertible to `WM`."],["SBARS","Status bar control styles (`u32`) convertible to `WS`."],["SBB","`HWND::GetScrollInfo`, `HWND::SetScrollInfo` and `HWND::SetScrollRange` `bar` (`i32`). Originally has `SB` prefix."],["SBN","Status bar control `WM_NOTIFY` notifications (`i32`) convertible to `NM`."],["SBT","`sb::GetText`, `sb::GetTextLength` and `sb::SetText` drawing operation (`u16`)."],["SB_REQ","`wm::HScroll` and `wm::VScroll` request (`u16`). Originally has `SB` prefix."],["SC","`wm::SysCommand` type of system command requested (`u32`)."],["SCS","`GetBinaryType` return value (`u32`)."],["SECTION","Composes `FILE_MAP` (`u32`)."],["SE_ERR","`HWND::ShellExecute` return value (`u32`)."],["SHARD","`SHARD` enumeration (`u32`)."],["SHGFI","`SHGetFileInfo` `flags` (`u32`)."],["SIF","`SCROLLINFO` `fMask` (`u32`)."],["SIZE_R","`wm::Size` request (`u8`)."],["SM","`GetSystemMetrics` `index` (`i32`)."],["SORT","Sort order identifiers (`u16`)."],["SPI","`SystemParametersInfo` `action` (`u32`)."],["SPIF","`SystemParametersInfo` `win_ini` (`u32`)."],["SS","Label control styles (`u32`) convertible to `WS`."],["STANDARD_RIGHTS","Standard access rights flags (`u32`)."],["STAP","`HTHEME::GetThemeAppProperties` return value (`u32`)."],["STARTF","`HPROCESS::CreateProcess` `dwFlags` (`u32`)."],["STATE_SYSTEM","`DATETIMEPICKERINFO` `stateCheck` and `stateButton`, `TITLEBARINFOEX` `rgstate`, `COMBOBOXINFO` `stateButton` (`u32`)."],["STM","Static control messages (`u32`) convertible to `WM`."],["STN","Static control `WM_COMMAND` notifications (`u16`) convertible to `CMD`."],["STOCK_BRUSH","`HBRUSH::GetStockObject` `i` (`i32`)."],["STOCK_FONT","`HFONT::GetStockObject` `i` (`i32`)."],["STOCK_PEN","`HPEN::GetStockObject` `i` (`i32`)."],["SUBLANG","Sublanguage identifier (`u16`)."],["SW","`HWND::ShowWindow` `show_cmd` (`i32`)."],["SWP","`HWND::SetWindowPos` `flags` (`u32`)."],["SW_S","`wm::ShowWindow` status (`u8`). Originally has `SW` prefix."],["TA","`HDC::SetTextAlign` `align` (`u32`). Also includes constants with `VTA` prefix."],["TB","`NMTRBTHUMBPOSCHANGING` `nReason` (`i32`)."],["TBM","Toolbar control messages (`u32`) convertible to `WM`. Originally has `TB` prefix."],["TBN","Toolbar control `WM_NOTIFY` notifications (`i32`) convertible to `NM`."],["TBS","Trackbar control styles (`u32`) convertible to `WS`."],["TBSTATE","Toolbar button states (`u8`)."],["TCIS","Tab control item states (`u32`)."],["TCM","Tab control messages (`u32`) convertible to `WM`."],["TCN","Tab control `WM_NOTIFY` notifications (`i32`) convertible to `NM`."],["TCS","Tab control styles (`u32`) convertible to `WS`."],["TCS_EX","Extended tab control styles (`u32`) convertible to `WS_EX`."],["TDCBF","`HWND::TaskDialog` and `TASKDIALOGCONFIG` `dwCommonButtons` (`i32`). Originally has `TDCBF` prefix and `BUTTON` suffix."],["TDF","`TASKDIALOGCONFIG` `dwFlags` (`i32`)."],["TD_ICON","`HWND::TaskDialog` `pszIcon` and `TASKDIALOGCONFIG` `pszMainIcon` (`u16`). Originally has `TD` prefix and `ICON` suffix."],["TH32CS","`HPROCESSLIST::CreateToolhelp32Snapshot` `flags` (`u32`)."],["THREAD_CREATE","`HTHREAD::CreateThread` `flags` (`u32`). Originally has no prefix."],["TME","`TrackMouseEvent` `dwFlags` (`u32`)."],["TMT","Theme property identifiers (`i32`)."],["TPM","`TrackPopupMenu` `flags` (`u32`)."],["TRBM","Trackbar control messages (`u32`) convertible to `WM`. Originally has `TBM` prefix."],["TRBN","Trackbar control `WM_NOTIFY` notifications (`i32`) convertible to `NM`."],["TVE","`tvm::Expand` `action` (`u32`)."],["TVGN","`tvm::GetNextItem` `which` (`u32`)."],["TVI","`TVINSERTSTRUCT` `hInsertAfter` (`isize`)."],["TVIF","`TVITEM` `mask` (`u32`)."],["TVIS","Tree view item states (`u32`)"],["TVIS_EX","`TVITEMEX` `uStateEx` (`u32`)."],["TVM","Tree view control messages (`u32`) convertible to `WM`."],["TVN","Tree view control `WM_NOTIFY` notifications (`i32`) convertible to `NM`."],["TVS","Tree view control styles (`u32`) convertible to `WS`."],["TVSIL","`tvm::GetImageList` and `tvm::SetImageList` `kind`."],["TVS_EX","Extended tree view control styles (`u32`) convertible to `WS_EX`."],["UDM","Up-down control messages (`u32`) convertible to `WM`."],["UDN","Up-down control `WM_NOTIFY` notifications (`i32`) convertible to `NM`."],["UDS","Up-down control styles (`u32`) convertible to `WS`."],["UOI","`HPROCESS::SetUserObjectInformation` `index` (`i32`)."],["VER_COND","`VerSetConditionMask` `condition` (`u8`)."],["VER_MASK","`VerifyVersionInfo` and `VerSetConditionMask` `type_mask` (`u32`)."],["VER_NT","`OSVERSIONINFOEX` `wProductType` (`u8`)."],["VER_PLATFORM","`OSVERSIONINFOEX` `dwPlatformId` (`u32`)."],["VER_SUITE","`OSVERSIONINFOEX` `wSuiteMask` (`u16`)."],["VFT","`VS_FIXEDFILEINFO` `dwFileType` (`u32`)."],["VFT2","`VS_FIXEDFILEINFO` `dwFileSubType` (`u32`)."],["VK","Virtual key codes (`u16`)."],["VK_DIR","`LVFINDINFO` `vkDirection` (`u16`)."],["VOS","`VS_FIXEDFILEINFO` `dwFileOS` (`u32`)."],["VS","Visual style parts and states. These are originally two separated constant types, but since they form a hierarchy, one single constant type can represent both part and state."],["VS_FF","`VS_FIXEDFILEINFO` `dwFileFlags` (`u32`)."],["WA","`wm::Activate` activation state (`u16`)."],["WAIT","`HPROCESS::WaitForSingleObject` return value (`u32`)."],["WC","`WideCharToMultiByte` `flags` (`u32`)."],["WDA","`HWND::GetWindowDisplayAffinity` and `HWND::SetWindowDisplayAffinity` `dwAffinity` (`u32`)."],["WH","`HHOOK::CallNextHookEx` `code` and `HHOOK::SetWindowsHookEx` `hook_id` (`i32`)."],["WIN32","`_WIN32` version definitions (`u16`)."],["WM","Window message codes (`u32`)."],["WMPN","`wm::ParentNotify` event (`u16`)."],["WMSZ","`wm::Sizing` window edge (`u8`)."],["WPF","`WINDOWPLACEMENT` `flags` (`u32`)."],["WS","Window styles (`u32`)."],["WS_EX","Extended window styles (`u32`)."],["WVR","`wm::NcCalcSize` return flags (`u32`)."]],"trait":[["NativeConstant","Any native Windows constant."]]});