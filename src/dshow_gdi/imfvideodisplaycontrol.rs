#![allow(non_snake_case)]

use crate::dshow::decl::IMFVideoDisplayControl;
use crate::gdi::decl::BITMAPINFOHEADER;
use crate::ole::decl::{CoTaskMemFree, HrResult};
use crate::ole::privs::ok_to_hrresult;
use crate::prelude::OleIUnknown;
use crate::vt::IMFVideoDisplayControlVT;

impl DshowGdiIMFVideoDisplayControl for IMFVideoDisplayControl {}

/// [`IMFVideoDisplayControl`](crate::IMFVideoDisplayControl) methods from
/// `dshow`+`gdi` feature.
#[cfg_attr(docsrs, doc(cfg(all(feature = "dshow", feature = "gdi"))))]
pub trait DshowGdiIMFVideoDisplayControl: OleIUnknown {
	/// [`GetCurrentImage`](https://docs.microsoft.com/en-us/windows/win32/api/evr/nf-evr-imfvideodisplaycontrol-getcurrentimage)
	/// method.
	///
	/// Returns bitmap description, DIB bytes and time stamp.
	fn GetCurrentImage(&self) -> HrResult<(BITMAPINFOHEADER, Vec<u8>, i64)> {
		let mut bih = BITMAPINFOHEADER::default();
		let mut dib_ptr: *mut u8 = std::ptr::null_mut();
		let mut dib_sz = u32::default();
		let mut time_stamp = i64::default();

		unsafe {
			let vt = &**(self.ptr().0 as *mut *mut IMFVideoDisplayControlVT);
			ok_to_hrresult(
				(vt.GetCurrentImage)(
					self.ptr(),
					&mut bih as *mut _ as _,
					&mut dib_ptr,
					&mut dib_sz,
					&mut time_stamp,
				),
			)
		}.map(|_| {
			let dib_vec = unsafe {
				std::slice::from_raw_parts(dib_ptr, dib_sz as _)
			}.to_vec();
			CoTaskMemFree(dib_ptr);
			(bih, dib_vec, time_stamp)
		})
	}
}
