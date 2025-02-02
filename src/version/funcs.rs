#![allow(non_snake_case)]

use crate::kernel::decl::{GetLastError, WinResult, WString};
use crate::kernel::privs::bool_to_winresult;
use crate::version;

/// [`GetFileVersionInfo`](https://docs.microsoft.com/en-us/windows/win32/api/winver/nf-winver-getfileversioninfow)
/// function.
///
/// The buffer will be automatically allocated with
/// [`GetFileVersionInfoSize`](crate::GetFileVersionInfoSize).
#[cfg_attr(docsrs, doc(cfg(feature = "version")))]
pub fn GetFileVersionInfo(file_name: &str) -> WinResult<Vec<u8>> {
	let block_sz = GetFileVersionInfoSize(file_name)?;
	let mut buf: Vec<u8> = vec![0x00; block_sz as _];

	bool_to_winresult(
		unsafe {
			version::ffi::GetFileVersionInfoW(
				WString::from_str(file_name).as_ptr(),
				0,
				buf.len() as _,
				buf.as_mut_ptr() as _,
			)
		},
	).map(|_| buf)
}

/// [`GetFileVersionInfoSize`](https://docs.microsoft.com/en-us/windows/win32/api/winver/nf-winver-getfileversioninfosizew)
/// function.
#[cfg_attr(docsrs, doc(cfg(feature = "version")))]
pub fn GetFileVersionInfoSize(file_name: &str) -> WinResult<u32> {
	let mut dw_handle = u32::default();
	match unsafe {
		version::ffi::GetFileVersionInfoSizeW(
			WString::from_str(file_name).as_ptr(),
			&mut dw_handle,
		)
	} {
		0 => Err(GetLastError()),
		sz => Ok(sz)
	}
}

/// [`VarQueryValue`](https://docs.microsoft.com/en-us/windows/win32/api/winver/nf-winver-verqueryvaluew)
/// function.
///
/// **Note:** The returned pointer and size vary according to `lpSubBlock`. If
/// you set it wrong, you're likely to cause a buffer overrun.
///
/// This function is rather tricky, consider using
/// [`ResourceInfo`](crate::ResourceInfo).
///
/// # Examples
///
/// Reading version information from resource:
///
/// ```rust,no_run
/// use winsafe::prelude::*;
/// use winsafe::{GetFileVersionInfo, HINSTANCE,
///     VarQueryValue, VS_FIXEDFILEINFO};
///
/// let exe_name = HINSTANCE::NULL.GetModuleFileName()?;
/// let res_buf = GetFileVersionInfo(&exe_name)?;
///
/// let (pvsf, sz_data) = unsafe {
///     VarQueryValue::<VS_FIXEDFILEINFO>(&res_buf, "\\")?
/// };
///
/// let ver = unsafe { &*pvsf }.dwFileVersion();
/// println!("Version {}.{}.{}.{}",
///     ver[0], ver[1], ver[2], ver[3]);
/// # Ok::<_, winsafe::co::ERROR>(())
/// ```
#[cfg_attr(docsrs, doc(cfg(feature = "version")))]
pub unsafe fn VarQueryValue<T>(
	block: &[u8], sub_block: &str) -> WinResult<(*const T, u32)>
{
	let mut lp_lp_buffer = std::ptr::null();
	let mut pu_len = 0;

	bool_to_winresult(
		version::ffi::VerQueryValueW(
			block.as_ptr() as _,
			WString::from_str(sub_block).as_ptr(),
			&mut lp_lp_buffer as *mut _ as _,
			&mut pu_len,
		),
	).map(|_| (lp_lp_buffer as *const T, pu_len))
}
