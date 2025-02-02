#![allow(non_snake_case)]

use crate::kernel;
use crate::kernel::decl::WinResult;
use crate::kernel::privs::bool_to_winresult;
use crate::prelude::Handle;

impl_handle! { HFILEMAPVIEW: "kernel";
	/// Address of a
	/// [mapped view](https://docs.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-mapviewoffile).
	/// Originally just an `LPVOID`.
}

impl KernelHfilemapview for HFILEMAPVIEW {}

/// [`HFILEMAPVIEW`](crate::HFILEMAPVIEW) methods from `kernel` feature.
#[cfg_attr(docsrs, doc(cfg(feature = "kernel")))]
pub trait KernelHfilemapview: Handle {
	/// Returns a slice representing the mapped memory. You can modify the
	/// contents. You should call this method only if the file has write access.
	///
	/// **Note**: If the file is resized to a smaller size, the slice will still
	/// map the bytes beyond the file. This may cause serious errors. So, if the
	/// file is resized, re-generate the slice by calling `as_slice` again.
	fn as_mut_slice<'a>(self, len: usize) -> &'a mut [u8] {
		unsafe { std::slice::from_raw_parts_mut(self.as_ptr() as _, len) }
	}

	/// Returns a slice representing the mapped memory.
	///
	/// **Note**: If the file is resized to a smaller size, the slice will still
	/// map the bytes beyond the file. This may cause serious errors. So, if the
	/// file is resized, re-generate the slice by calling `as_slice` again.
	///
	/// # Examples
	///
	/// Reading the contents of a file into a string:
	///
	/// ```rust,no_run
	/// use winsafe::prelude::*;
	/// use winsafe::{co, HFILE};
	///
	/// let (hfile, _) = HFILE::CreateFile(
	///     "C:\\Temp\\test.txt",
	///     co::GENERIC::READ,
	///     co::FILE_SHARE::READ,
	///     None,
	///     co::DISPOSITION::OPEN_EXISTING,
	///     co::FILE_ATTRIBUTE::NORMAL,
	///     None,
	/// )?;
	///
	/// let hmap = hfile.CreateFileMapping(
	///     None,
	///     co::PAGE::READONLY,
	///     None,
	///     None,
	/// )?;
	///
	/// let view = hmap.MapViewOfFile(co::FILE_MAP::READ, 0, None)?;
	///
	/// let slice = view.as_slice(hfile.GetFileSizeEx()?);
	/// let text = std::str::from_utf8(slice)?;
	///
	/// view.UnmapViewOfFile()?;
	/// hmap.CloseHandle()?;
	/// hfile.CloseHandle()?;
	///
	/// println!("{}", text);
	/// # Ok::<_, Box<dyn std::error::Error>>(())
	/// ```
	fn as_slice<'a>(self, len: usize) -> &'a [u8] {
		unsafe { std::slice::from_raw_parts(self.as_ptr() as _, len) }
	}

	/// [`UnmapViewOfFile`](https://docs.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-unmapviewoffile)
	/// method.
	fn UnmapViewOfFile(self) -> WinResult<()> {
		bool_to_winresult(unsafe { kernel::ffi::UnmapViewOfFile(self.as_ptr()) })
	}
}
