use crate::co;
use crate::kernel::decl::WinResult;

pub(crate) const ASFW_ANY: u32 = -1i32 as _;
pub(crate) const CB_ERR: i32 = -1;
pub(crate) const CB_ERRSPACE: i32 = -2;
pub(crate) const CCHDEVICENAME: usize = 32;
pub(crate) const CCHDEVICESTRING: usize = 128;
pub(crate) const CCHDEVICEID: usize = 128;
pub(crate) const CCHDEVICEKEY: usize = 128;
pub(crate) const CCHFORMNAME: usize = 32;
pub(crate) const CCHILDREN_TITLEBAR: usize = 5;
pub(crate) const DM_SPECVERSION: u16 = 0x0401;
pub(crate) const FAPPCOMMAND_MASK: u16 = 0xf000;
pub(crate) const INFOTIPSIZE: usize = 1024; // actually from comctl, but used in shell
pub(crate) const LB_ERR: i32 = -1;
pub(crate) const LB_ERRSPACE: i32 = -2;

/// Takes an `isize` and returns `Err` if zero.
pub(crate) fn zero_as_err(v: isize) -> WinResult<isize> {
	match v {
		0 => Err(co::ERROR::BAD_ARGUMENTS), // all message errors will return this code
		v => Ok(v),
	}
}

/// Takes an `isize` and returns `None` if zero.
pub(crate) fn zero_as_none(v: isize) -> Option<isize> {
	match v {
		0 => None,
		v => Some(v),
	}
}
