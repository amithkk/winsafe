#![allow(non_camel_case_types)]

const_ordinary! { AD: i32: "gdi";
	/// [`HDC::SetArcDirection`](crate::prelude::GdiHdc::SetArcDirection) `dir`
	/// (`i32`).
	=>
	=>
	COUNTERCLOCKWISE 1
	CLOCKWISE 2
}

const_ordinary! { BI: u32: "gdi";
	/// [`BITMAPINFOHEADER`](crate::BITMAPINFOHEADER) `biCompression` (`u32`).
	=>
	=>
	RGB 0
	RLE8 1
	RLE4 2
	BITFIELDS 3
	JPEG 4
	PNG 5
}

const_ordinary! { BKMODE: i32: "gdi";
	/// [`HDC::SetBkMode`](crate::prelude::GdiHdc::SetBkMode) `mode` (`i32`).
	=>
	=>
	TRANSPARENT 1
	OPAQUE 2
}

const_ordinary! { BSS: u32: "gdi";
	/// [`LOGBRUSH`](crate::LOGBRUSH) `lbStyle` (`u32`).
	///
	/// Originally has `BS` prefix.
	=>
	=>
	SOLID 0
	NULL 1
	HOLLOW Self::NULL.0
	HATCHED 2
	PATTERN 3
	INDEXED 4
	DIBPATTERN 5
	DIBPATTERNPT 6
	PATTERN8X8 7
	DIBPATTERN8X8 8
	MONOPATTERN 9
}

const_ordinary! { CHARSET: u8: "gdi";
	/// [`HFONT::CreateFont`](crate::prelude::GdiHfont::CreateFont) `char_set`
	/// and [`LOGFONT`](crate::LOGFONT) `lfCharset` (`u8`).
	=>
	=>
	ANSI 0
	DEFAULT 1
	SYMBOL 2
	SHIFTJIS 128
	HANGEUL 129
	HANGUL 129
	GB2312 134
	CHINESEBIG5 136
	OEM 255
	JOHAB 130
	HEBREW 177
	ARABIC 178
	GREEK 161
	TURKISH 162
	VIETNAMESE 163
	THAI 222
	EASTEUROPE 238
	RUSSIAN 204
	MAC 77
	BALTIC 186
}

const_ordinary! { CLIP: u8: "gdi";
	/// [`HFONT::CreateFont`](crate::prelude::GdiHfont::CreateFont)
	/// `clip_precision` and [`LOGFONT`](crate::LOGFONT) `lfClipPrecision`
	/// (`u8`).
	=>
	=>
	DEFAULT_PRECIS 0
	CHARACTER_PRECIS 1
	STROKE_PRECIS 2
	MASK 0xf
	LH_ANGLES 1 << 4
	TT_ALWAYS 2 << 4
	DFA_DISABLE 4 << 4
	EMBEDDED 8 << 4
}

const_ordinary! { DIB: u32: "gdi";
	/// [`LOGBRUSH`](crate::LOGBRUSH) `lbColor` (`u32`).
	=>
	=>
	/// The color table consists of an array of 16-bit indexes into the
	/// currently realized logical palette.
	RGB_COLORS 0
	/// The color table contains literal RGB values.
	PAL_COLORS 1
}

const_ordinary! { FF: u8: "gdi";
	/// [`LOGFONT`](crate::LOGFONT) `lfPitchAndFamily` (`u8`) used with
	/// [`PITCH`](crate::co::PITCH).
	=>
	=>
	DONTCARE 0 << 4
	ROMAN 1 << 4
	SWISS 2 << 4
	MODERN 3 << 4
	SCRIPT 4 << 4
	DECORATIVE 5 << 4
}

const_ordinary! { FW: u32: "gdi";
	/// [`HFONT::CreateFont`](crate::prelude::GdiHfont::CreateFont) `weight` and
	/// [`LOGFONT`](crate::LOGFONT) `lfWeight` (`u32`).
	=>
	=>
	DONTCARE 0
	THIN 100
	EXTRALIGHT 200
	ULTRALIGHT Self::EXTRALIGHT.0
	LIGHT 300
	NORMAL 400
	REGULAR 400
	MEDIUM 500
	SEMIBOLD 600
	DEMIBOLD Self::SEMIBOLD.0
	BOLD 700
	EXTRABOLD 800
	ULTRABOLD Self::EXTRABOLD.0
	HEAVY 900
	BLACK Self::HEAVY.0
}

const_ordinary! { GDC: i32: "gdi";
	/// [`HDC::GetDeviceCaps`](crate::prelude::GdiHdc::GetDeviceCaps) `index`
	/// (`i32`).
	///
	/// Originally has no prefix.
	=>
	=>
	DRIVERVERSION 0
	TECHNOLOGY 2
	HORZSIZE 4
	VERTSIZE 6
	HORZRES 8
	VERTRES 10
	BITSPIXEL 12
	PLANES 14
	NUMBRUSHES 16
	NUMPENS 18
	NUMMARKERS 20
	NUMFONTS 22
	NUMCOLORS 24
	PDEVICESIZE 26
	CURVECAPS 28
	LINECAPS 30
	POLYGONALCAPS 32
	TEXTCAPS 34
	CLIPCAPS 36
	RASTERCAPS 38
	ASPECTX 40
	ASPECTY 42
	ASPECTXY 44
	LOGPIXELSX 88
	LOGPIXELSY 90
	SIZEPALETTE 104
	NUMRESERVED 106
	COLORRES 108
	PHYSICALWIDTH 110
	PHYSICALHEIGHT 111
	PHYSICALOFFSETX 112
	PHYSICALOFFSETY 113
	SCALINGFACTORX 114
	SCALINGFACTORY 115
	VREFRESH 116
	DESKTOPVERTRES 117
	DESKTOPHORZRES 118
	BLTALIGNMENT 119
	SHADEBLENDCAPS 120
	COLORMGMTCAPS 121
}

const_ordinary! { GM: i32: "gdi";
	/// [`HDC::SetGraphicsMode`](crate::prelude::GdiHdc::SetGraphicsMode) `mode`
	/// (`i32`).
	=>
	=>
	COMPATIBLE 1
	ADVANCED 2
}

const_ordinary! { HS: i32: "gdi";
	/// [`HBRUSH::CreateHatchBrush`](crate::prelude::GdiHbrush::CreateHatchBrush)
	/// `hatch`
	/// (`i32`).
	=>
	=>
	/// Horizontal hatch: `-----`.
	HORIZONTAL 0
	/// Vertical hatch: `|||||`.
	VERTICAL 1
	/// 45-degree downward left-to-right hatch: `\\\\\`.
	FDIAGONAL 2
	/// 45-degree upward left-to-right hatch: `/////`.
	BDIAGONAL 3
	/// Horizontal and vertical crosshatch: `+++++`.
	CROSS 4
	/// 45-degree crosshatch: `xxxxx`.
	DIAGCROSS 5
}

const_ordinary! { OUT_PRECIS: u8: "gdi";
	/// [`HFONT::CreateFont`](crate::prelude::GdiHfont::CreateFont)
	/// `out_precision` and [`LOGFONT`](crate::LOGFONT) `lfOutPrecision` (`u8`).
	=>
	=>
	DEFAULT 0
	STRING 1
	CHARACTER 2
	STROKE 3
	TT 4
	DEVICE 5
	RASTER 6
	TT_ONLY 7
	OUTLINE 8
	SCREEN_OUTLINE 9
	PS_ONLY 10
}

const_ordinary! { PITCH: u8: "gdi";
	/// [`HFONT::CreateFont`](crate::prelude::GdiHfont::CreateFont)
	/// `pitch_and_family` and [`LOGFONT`](crate::LOGFONT) `lfPitchAndFamily`
	/// (`u8`) used with [`FF`](crate::co::FF).
	=>
	=>
	DEFAULT 0
	FIXED 1
	VARIABLE 2
}
impl PITCH {
	/// Composes [`LOGFONT`](crate::LOGFONT) `lfPitchAndFamily`.
	pub fn add_family(&mut self, family: FF) -> &PITCH {
		self.0 |= family.0;
		self
	}
}

const_ordinary! { PS: i32: "gdi";
	/// [`HPEN::CreatePen`](crate::prelude::GdiHpen::CreatePen) `style` (`i32`).
	=>
	=>
	SOLID 0
	DASH 1
	DOT 2
	DASHDOT 3
	DASHDOTDOT 4
	NULL 5
	INSIDEFRAME 6
}

const_ordinary! { QUALITY: u8: "gdi";
	/// [`HFONT::CreateFont`](crate::prelude::GdiHfont::CreateFont) `quality`
	/// and [`LOGFONT`](crate::LOGFONT) `lfQuality` (`u8`).
	=>
	=>
	DEFAULT 0
	DRAFT 1
	PROOF 2
	NONANTIALIASED 3
	ANTIALIASED 4
	CLEARTYPE 5
	CLEARTYPE_NATURAL 6
}

const_ordinary! { ROP: u32: "gdi";
	/// Raster operation code (`u32`).
	/// [`HDC::BitBlt`](crate::prelude::GdiHdc::BitBlt) `rop`,
	/// [`HDC::PatBlt`](crate::prelude::GdiHdc::PatBlt) `rop` and
	/// [`IMAGELISTDRAWPARAMS`](crate::IMAGELISTDRAWPARAMS) `dwRop`.
	///
	/// Originally has no prefix.
	=>
	=>
	/// Copies the source rectangle directly to the destination rectangle.
	SRCCOPY 0x00cc_0020
	/// Combines the colors of the source and destination rectangles by using
	/// the Boolean OR operator.
	SRCPAINT 0x00ee_0086
	/// Combines the colors of the source and destination rectangles by using
	/// the Boolean AND operator.
	SRCAND 0x0088_00c6
	/// Combines the colors of the source and destination rectangles by using
	/// the Boolean XOR operator.
	SRCINVERT 0x0066_0046
	/// Combines the inverted colors of the destination rectangle with the
	/// colors of the source rectangle by using the Boolean AND operator.
	SRCERASE 0x0044_0328
	/// Copies the inverted source rectangle to the destination.
	NOTSRCCOPY 0x0033_0008
	/// Combines the colors of the source and destination rectangles by using
	/// the Boolean OR operator and then inverts the resultant color.
	NOTSRCERASE 0x0011_00a6
	/// Merges the colors of the source rectangle with the brush currently
	/// selected in hdcDest, by using the Boolean AND operator.
	MERGECOPY 0x00c0_00ca
	/// Merges the colors of the inverted source rectangle with the colors of
	/// the destination rectangle by using the Boolean OR operator.
	MERGEPAINT 0x00bb_0226
	/// Copies the brush currently selected in hdcDest, into the destination
	/// bitmap.
	PATCOPY 0x00f0_0021
	/// Combines the colors of the brush currently selected in hdcDest, with the
	/// colors of the inverted source rectangle by using the Boolean OR
	/// operator. The result of this operation is combined with the colors of
	/// the destination rectangle by using the Boolean OR operator.
	PATPAINT 0x00fb_0a09
	/// Combines the colors of the brush currently selected in hdcDest, with the
	/// colors of the destination rectangle by using the Boolean XOR operator.
	PATINVERT 0x005a_0049
	/// Inverts the destination rectangle.
	DSTINVERT 0x0055_0009
	/// Fills the destination rectangle using the color associated with index 0
	/// in the physical palette. (This color is black for the default physical
	/// palette.)
	BLACKNESS 0x0000_0042
	/// Fills the destination rectangle using the color associated with index 1
	/// in the physical palette. (This color is white for the default physical
	/// palette.)
	WHITENESS 0x00ff_0062
	/// Prevents the bitmap from being mirrored.
	NOMIRRORBITMAP 0x8000_0000
	/// Includes any windows that are layered on top of your window in the
	/// resulting image. By default, the image only contains your window. Note
	/// that this generally cannot be used for printing device contexts.
	CAPTUREBLT 0x4000_0000
}

const_ordinary! { STOCK_BRUSH: i32: "gdi";
	/// [`HBRUSH::GetStockObject`](crate::prelude::GdiHbrush::GetStockObject)
	/// `i` (`i32`).
	=>
	=>
	BLACK 4
	DKGRAY 3
	DC 18
	GRAY 2
	HOLLOW Self::NULL.0
	LTGRAY 1
	NULL 5
	WHITE 0
}

const_ordinary! { STOCK_FONT: i32: "gdi";
	/// [`HFONT::GetStockObject`](crate::prelude::GdiHfont::GetStockObject) `i`
	/// (`i32`).
	=>
	=>
	ANSI_FIXED 11
	ANSI_VAR 12
	DEVICE_DEFAULT 14
	DEFAULT_GUI 17
	OEM_FIXED 10
	SYSTEM 13
	SYSTEM_FIXED 16
}

const_ordinary! { STOCK_PEN: i32: "gdi";
	/// [`HPEN::GetStockObject`](crate::prelude::GdiHpen::GetStockObject) `i`
	/// (`i32`).
	=>
	=>
	BLACK 7
	DC 19
	NULL 8
	WHITE 6
}

const_ordinary! { STRETCH_MODE: i32: "gdi";
	/// [`HDC::SetStretchBltMode`](crate::prelude::GdiHdc::SetStretchBltMode)
	/// `mode` (`i32`).
	=>
	=>
	/// Performs a Boolean AND operation using the color values for the
	/// eliminated and existing pixels. If the bitmap is a monochrome bitmap,
	/// this mode preserves black pixels at the expense of white pixels.
	BLACKONWHITE 1
	/// Deletes the pixels. This mode deletes all eliminated lines of pixels
	/// without trying to preserve their information.
	COLORONCOLOR 3
	/// Maps pixels from the source rectangle into blocks of pixels in the
	/// destination rectangle. The average color over the destination block of
	/// pixels approximates the color of the source pixels.
	///
	/// After setting the `HALFTONE` stretching mode, an application must call
	/// the [`HDC::SetBrushOrgEx`](crate::prelude::GdiHdc::SetBrushOrgEx)
	/// function to set the brush origin. If it fails to do so, brush
	/// misalignment occurs.
	HALFTONE 4
	/// Same as `BLACKONWHITE`.
	STRETCH_ANDSCANS Self::BLACKONWHITE.0
	/// Same as `WHITEONBLACK`.
	STRETCH_ORSCANS Self::WHITEONBLACK.0
	/// Same as `COLORONCOLOR`.
	STRETCH_DELETESCANS Self::COLORONCOLOR.0
	/// Same as `HALFTONE`.
	STRETCH_HALFTONE Self::HALFTONE.0
	/// Performs a Boolean OR operation using the color values for the
	/// eliminated and existing pixels. If the bitmap is a monochrome bitmap,
	/// this mode preserves white pixels at the expense of black pixels.
	WHITEONBLACK 2
}

const_bitflag! { TA: u32: "gdi";
	/// [`HDC::SetTextAlign`](crate::prelude::GdiHdc::SetTextAlign) `align`
	/// (`u32`).
	///
	/// Also includes constants with `VTA` prefix.
	=>
	=>
	NOUPDATECP 0
	UPDATECP 1
	LEFT 0
	RIGHT 2
	CENTER 6
	TOP 0
	BOTTOM 8
	BASELINE 24
	RTLREADING 256
}
