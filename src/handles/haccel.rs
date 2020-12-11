#![allow(non_snake_case)]

use crate::ffi::HANDLE;

use crate::ACCEL;
use crate::co;
use crate::ffi::user32;
use crate::GetLastError;
use crate::internal_defs::mut_void;

handle_type! {
	/// Handle to an
	/// [accelerator table](https://docs.microsoft.com/en-us/windows/win32/winprog/windows-data-types#haccel).
	/// Exposes methods.
	HACCEL
}

impl HACCEL {
	/// [`CreateAcceleratorTable`](https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createacceleratortablew)
	/// static method.
	pub fn CreateAcceleratorTable(
		paccel: &mut [ACCEL]) -> Result<HACCEL, co::ERROR>
	{
		match ptr_as_opt!(
			user32::CreateAcceleratorTableW(
				mut_void(&mut paccel[0]), paccel.len() as i32)
		 ) {
			Some(p) => Ok(Self(p)),
			None => Err(GetLastError()),
		}
	}

	/// [`DestroyAcceleratorTable`](https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-destroyacceleratortable)
	/// method.
	pub fn DestroyAcceleratorTable(self) -> bool {
		unsafe { user32::DestroyAcceleratorTable(self.0) != 0 }
	}
}