// This file is taken from https://github.com/itorr/homo/blob/master/homo.js, under the MIT license without any modification
// Copyright itorr 2023

const homo = ((Nums) => {
	const numsReversed = Object.keys(Nums).map(x => +x).filter(x => x > 0)
	const getMinDiv = (num) => {
		for (let i = numsReversed.length; i >= 0; i--)
			if (num >= numsReversed[i])
				return numsReversed[i]
	}
	const isDotRegex = /\.(\d+?)0{0,}$/
	const demolish = (num) => {
		if (typeof num !== "number")
			return ""

		if (num === Infinity || Number.isNaN(num))
			return `这么恶臭的${num}有必要论证吗`

		if (num < 0)
			return `(⑨)*(${demolish(num * -1)})`.replace(/\*\(1\)/g, "")

		if (!Number.isInteger(num)) {
			// abs(num) is definitely smaller than 2**51
			// rescale
			const n = num.toFixed(16).match(isDotRegex)[1].length
			return `(${demolish(num * Math.pow(10, n))})/(10)^(${n})`
		}

		if (Nums[num])
			return String(num)

		const div = getMinDiv(num)
		return (`${div}*(${demolish(Math.floor(num / div))})+` +
			`(${demolish(num % div)})`).replace(/\*\(1\)|\+\(0\)$/g, "")
	}
	//Finisher
	const finisher = (expr) => {
		expr = expr.replace(/\d+|⑨/g, (n) => Nums[n]).replace("^", "**")
		//As long as it matches ([\*|\/])\(([^\+\-\(\)]+)\), replace it with $1$2
		while (expr.match(/[\*|\/]\([^\+\-\(\)]+\)/))
			expr = expr.replace(/([\*|\/])\(([^\+\-\(\)]+)\)/, (m, $1, $2) => $1 + $2)
		//As long as it matches ([\+|\-])\(([^\(\)]+)\)([\+|\-|\)]), replace it with $1$2$3
		while (expr.match(/[\+|\-]\([^\(\)]+\)[\+|\-|\)]/))
			expr = expr.replace(/([\+|\-])\(([^\(\)]+)\)([\+|\-|\)])/, (m, $1, $2, $3) => $1 + $2 + $3)
		//As long as it matches ([\+|\-])\(([^\(\)]+)\)$, replace it with $1$2
		while (expr.match(/[\+|\-]\(([^\(\)]+)\)$/))
			expr = expr.replace(/([\+|\-])\(([^\(\)]+)\)$/, (m, $1, $2) => $1 + $2)
		//If there is a bracket in the outermost part, remove it
		if (expr.match(/^\([^\(\)]+?\)$/))
			expr = expr.replace(/^\(([^\(\)]+)\)$/, "$1")

		expr = expr.replace(/\+-/g,'-')
		return expr
	}
	return (num) => finisher(demolish(num))
})({
	229028: "(114514+114514)",
	114514: "114514",
	58596: "114*514",
	49654: "11*4514",
	45804: "11451*4",
	23256: "114*51*4",
	22616: "11*4*514",
	19844: "11*451*4",
	16030: "1145*14",
	14515: "1+14514",
	14514: "1*14514",
	14513: "-1+14514",
	11455: "11451+4",
	11447: "11451-4",
	9028: "(1+1)*4514",
	8976: "11*4*51*4",
	7980: "114*5*14",
	7710: "(1+14)*514",
	7197: "1+14*514",
	7196: "1*14*514",
	7195: "-1+14*514",
	6930: "11*45*14",
	6682: "(1-14)*-514",
	6270: "114*(51+4)",
	5818: "114*51+4",
	5810: "114*51-4",
	5808: "(1+1451)*4",
	5805: "1+1451*4",
	5804: "1*1451*4",
	5803: "-1+1451*4",
	5800: "(1-1451)*-4",
	5725: "1145*(1+4)",
	5698: "11*(4+514)",
	5610: "-11*(4-514)",
	5358: "114*(51-4)",
	5005: "11*(451+4)",
	4965: "11*451+4",
	4957: "11*451-4",
	4917: "11*(451-4)",
	4584: "(1145+1)*4",
	4580: "1145*1*4",
	4576: "(1145-1)*4",
	4525: "11+4514",
	4516: "1+1+4514",
	4515: "1+1*4514",
	4514: "1-1+4514",
	4513: "-1*1+4514",
	4512: "-1-1+4514",
	4503: "-11+4514",
	4112: "(1+1)*4*514",
	3608: "(1+1)*451*4",
	3598: "(11-4)*514",
	3435: "-1145*(1-4)",
	3080: "11*4*5*14",
	3060: "(11+4)*51*4",
	2857: "1+14*51*4",
	2856: "1*14*51*4",
	2855: "-1+14*51*4",
	2850: "114*5*(1+4)",
	2736: "114*(5+1)*4",
	2652: "(1-14)*51*-4",
	2570: "1*(1+4)*514",
	2475: "11*45*(1+4)",
	2420: "11*4*(51+4)",
	2280: "114*5*1*4",
	2248: "11*4*51+4",
	2240: "11*4*51-4",
	2166: "114*(5+14)",
	2068: "11*4*(51-4)",
	2067: "11+4*514",
	2058: "1+1+4*514",
	2057: "1/1+4*514",
	2056: "1/1*4*514",
	2055: "-1/1+4*514",
	2054: "-1-1+4*514",
	2045: "-11+4*514",
	2044: "(1+145)*14",
	2031: "1+145*14",
	2030: "1*145*14",
	2029: "-1+145*14",
	2024: "11*(45+1)*4",
	2016: "-(1-145)*14",
	1980: "11*45*1*4",
	1936: "11*(45-1)*4",
	1848: "(11+451)*4",
	1824: "114*(5-1)*4",
	1815: "11+451*4",
	1808: "1*(1+451)*4",
	1806: "1+1+451*4",
	1805: "1+1*451*4",
	1804: "1-1+451*4",
	1803: "1*-1+451*4",
	1802: "-1-1+451*4",
	1800: "1*-(1-451)*4",
	1793: "-11+451*4",
	1760: "-(11-451)*4",
	1710: "114*-5*(1-4)",
	1666: "(114+5)*14",
	1632: "(1+1)*4*51*4",
	1542: "1*-(1-4)*514",
	1526: "(114-5)*14",
	1485: "11*-45*(1-4)",
	1456: "1+1451+4",
	1455: "1*1451+4",
	1454: "-1+1451+4",
	1448: "1+1451-4",
	1447: "1*1451-4",
	1446: "-1+1451-4",
	1428: "(11-4)*51*4",
	1386: "11*(4+5)*14",
	1260: "(1+1)*45*14",
	1159: "1145+14",
	1150: "1145+1+4",
	1149: "1145+1*4",
	1148: "1145-1+4",
	1142: "1145+1-4",
	1141: "1145-1*4",
	1140: "(1145-1)-4",
	1131: "1145-14",
	1100: "11*4*5*(1+4)",
	1056: "11*4*(5+1)*4",
	1050: "(11+4)*5*14",
	1036: "(1+1)*(4+514)",
	1026: "114*-(5-14)",
	1020: "1*(1+4)*51*4",
	981: "1+14*5*14",
	980: "1*14*5*14",
	979: "-1+14*5*14",
	910: "-(1-14)*5*14",
	906: "(1+1)*451+4",
	898: "(1+1)*451-4",
	894: "(1+1)*(451-4)",
	880: "11*4*5*1*4",
	836: "11*4*(5+14)",
	827: "11+4*51*4",
	825: "(11+4)*(51+4)",
	818: "1+1+4*51*4",
	817: "1*1+4*51*4",
	816: "1*1*4*51*4",
	815: "-1+1*4*51*4",
	814: "-1-1+4*51*4",
	805: "-11+4*51*4",
	784: "(11+45)*14",
	771: "1+14*(51+4)",
	770: "1*14*(51+4)",
	769: "(11+4)*51+4",
	761: "(1+14)*51-4",
	730: "(1+145)*(1+4)",
	726: "1+145*(1+4)",
	725: "1*145*(1+4)",
	724: "-1-145*-(1+4)",
	720: "(1-145)*-(1+4)",
	719: "1+14*51+4",
	718: "1*14*51+4",
	717: "-1-14*-51+4",
	715: "(1-14)*-(51+4)",
	711: "1+14*51-4",
	710: "1*14*51-4",
	709: "-1+14*51-4",
	705: "(1+14)*(51-4)",
	704: "11*4*(5-1)*4",
	688: "114*(5+1)+4",
	680: "114*(5+1)-4",
	667: "-(1-14)*51+4",
	660: "(114+51)*4",
	659: "1+14*(51-4)",
	658: "1*14*(51-4)",
	657: "-1+14*(51-4)",
	649: "11*(45+14)",
	644: "1*(1+45)*14",
	641: "11+45*14",
	632: "1+1+45*14",
	631: "1*1+45*14",
	630: "1*1*45*14",
	629: "1*-1+45*14",
	628: "114+514",
	619: "-11+45*14",
	616: "1*-(1-45)*14",
	612: "-1*(1-4)*51*4",
	611: "(1-14)*-(51-4)",
	609: "11*(4+51)+4",
	601: "11*(4+51)-4",
	595: "(114+5)*(1+4)",
	584: "114*5+14",
	581: "1+145*1*4",
	580: "1*145/1*4",
	579: "-1+145*1*4",
	576: "1*(145-1)*4",
	575: "114*5+1+4",
	574: "114*5/1+4",
	573: "114*5-1+4",
	567: "114*5+1-4",
	566: "114*5*1-4",
	565: "114*5-1-4",
	561: "11/4*51*4",
	560: "(1+1)*4*5*14",
	558: "11*4+514",
	556: "114*5-14",
	545: "(114-5)*(1+4)",
	529: "1+14+514",
	528: "1*14+514",
	527: "-1+14+514",
	522: "(1+1)*4+514",
	521: "11-4+514",
	520: "1+1+4+514",
	519: "1+1*4+514",
	518: "1-1+4+514",
	517: "-1+1*4+514",
	516: "-1-1+4+514",
	514: "(1-1)/4+514",
	513: "-11*(4-51)-4",
	512: "1+1-4+514",
	511: "1*1-4+514",
	510: "1-1-4+514",
	509: "11*45+14",
	508: "-1-1-4+514",
	507: "-11+4+514",
	506: "-(1+1)*4+514",
	502: "11*(45+1)-4",
	501: "1-14+514",
	500: "11*45+1+4",
	499: "11*45*1+4",
	498: "11*45-1+4",
	495: "11*(4+5)*(1+4)",
	492: "11*45+1-4",
	491: "11*45-1*4",
	490: "11*45-1-4",
	488: "11*(45-1)+4",
	481: "11*45-14",
	480: "11*(45-1)-4",
	476: "(114+5)/1*4",
	470: "-11*4+514",
	466: "11+451+4",
	460: "114*(5-1)+4",
	458: "11+451-4",
	457: "1+1+451+4",
	456: "1*1+451+4",
	455: "1-1+451+4",
	454: "-1+1*451+4",
	453: "-1-1+451+4",
	452: "114*(5-1)-4",
	450: "(1+1)*45*(1+4)",
	449: "1+1+451-4",
	448: "1+1*451-4",
	447: "1/1*451-4",
	446: "1*-1+451-4",
	445: "-1-1+451-4",
	444: "-11+451+4",
	440: "(1+1)*4*(51+4)",
	438: "(1+145)*-(1-4)",
	436: "-11+451-4",
	435: "-1*145*(1-4)",
	434: "-1-145*(1-4)",
	432: "(1-145)*(1-4)",
	412: "(1+1)*4*51+4",
	404: "(1+1)*4*51-4",
	400: "-114+514",
	396: "11*4*-(5-14)",
	385: "(11-4)*(51+4)",
	376: "(1+1)*4*(51-4)",
	375: "(1+14)*5*(1+4)",
	368: "(1+1)*(45+1)*4",
	363: "(1+1451)/4",
	361: "(11-4)*51+4",
	360: "(1+1)*45*1*4",
	357: "(114+5)*-(1-4)",
	353: "(11-4)*51-4",
	352: "(1+1)*(45-1)*4",
	351: "1+14*-5*-(1+4)",
	350: "1*(1+4)*5*14",
	349: "-1+14*5*(1+4)",
	341: "11*(45-14)",
	337: "1-14*-(5+1)*4",
	336: "1*14*(5+1)*4",
	335: "-1+14*(5+1)*4",
	329: "(11-4)*(51-4)",
	327: "-(114-5)*(1-4)",
	325: "-(1-14)*5*(1+4)",
	318: "114+51*4",
	312: "(1-14)*-(5+1)*4",
	300: "(11+4)*5/1*4",
	297: "-11*(4+5)*(1-4)",
	291: "11+4*5*14",
	286: "(1145-1)/4",
	285: "(11+4)*(5+14)",
	282: "1+1+4*5*14",
	281: "1+14*5/1*4",
	280: "1-1+4*5*14",
	279: "1*-1+4*5*14",
	278: "-1-1+4*5*14",
	275: "1*(1+4)*(51+4)",
	270: "(1+1)*45*-(1-4)",
	269: "-11+4*5*14",
	268: "11*4*(5+1)+4",
	267: "1+14*(5+14)",
	266: "1*14*(5+14)",
	265: "-1+14*(5+14)",
	260: "1*(14+51)*4",
	259: "1*(1+4)*51+4",
	257: "(1+1)/4*514",
	252: "(114-51)*4",
	251: "1*-(1+4)*-51-4",
	248: "11*4+51*4",
	247: "-(1-14)*(5+14)",
	240: "(11+4)*(5-1)*4",
	236: "11+45*(1+4)",
	235: "1*(1+4)*(51-4)",
	234: "11*4*5+14",
	231: "11+4*(51+4)",
	230: "1*(1+45)*(1+4)",
	229: "1145/(1+4)",
	227: "1+1+45*(1+4)",
	226: "1*1+45*(1+4)",
	225: "11*4*5+1+4",
	224: "11*4*5/1+4",
	223: "11*4*5-1+4",
	222: "1+1+4*(51+4)",
	221: "1/1+4*(51+4)",
	220: "1*1*(4+51)*4",
	219: "1+14+51*4",
	218: "1*14+51*4",
	217: "11*4*5+1-4",
	216: "11*4*5-1*4",
	215: "11*4*5-1-4",
	214: "-11+45*(1+4)",
	212: "(1+1)*4+51*4",
	211: "11-4+51*4",
	210: "1+1+4+51*4",
	209: "1+1*4*51+4",
	208: "1*1*4+51*4",
	207: "-1+1*4*51+4",
	206: "11*4*5-14",
	204: "(1-1)/4+51*4",
	202: "1+1-4+51*4",
	201: "1/1-4+51*4",
	200: "1/1*4*51-4",
	199: "1*-1+4*51-4",
	198: "-1-1+4*51-4",
	197: "-11+4+51*4",
	196: "-(1+1)*4+51*4",
	195: "(1-14)*5*(1-4)",
	192: "(1+1)*4*(5+1)*4",
	191: "1-14+51*4",
	190: "1*-14+51*4",
	189: "-11-4+51*4",
	188: "1-1-(4-51)*4",
	187: "1/-1+4*(51-4)",
	186: "1+1+(45+1)*4",
	185: "1-1*-(45+1)*4",
	184: "114+5*14",
	183: "-1+1*(45+1)*4",
	182: "1+1+45/1*4",
	181: "1+1*45*1*4",
	180: "1*1*45*1*4",
	179: "-1/1+45*1*4",
	178: "-1-1+45*1*4",
	177: "1+1*(45-1)*4",
	176: "1*1*(45-1)*4",
	175: "-1+1*(45-1)*4",
	174: "-1-1+(45-1)*4",
	172: "11*4*(5-1)-4",
	171: "114*(5+1)/4",
	170: "(11-45)*-(1+4)",
	169: "114+51+4",
	168: "(11+45)*-(1-4)",
	165: "11*-45/(1-4)",
	161: "114+51-4",
	160: "1+145+14",
	159: "1*145+14",
	158: "-1+145+14",
	157: "1*(1-4)*-51+4",
	154: "11*(4-5)*-14",
	152: "(1+1)*4*(5+14)",
	151: "1+145+1+4",
	150: "1+145*1+4",
	149: "1*145*1+4",
	148: "1*145-1+4",
	147: "-1+145-1+4",
	146: "11+45*-(1-4)",
	143: "1+145+1-4",
	142: "1+145*1-4",
	141: "1+145-1-4",
	140: "1*145-1-4",
	139: "-1+145-1-4",
	138: "-1*(1+45)*(1-4)",
	137: "1+1-45*(1-4)",
	136: "1*1-45*(1-4)",
	135: "-1/1*45*(1-4)",
	134: "114+5/1*4",
	133: "114+5+14",
	132: "1+145-14",
	131: "1*145-14",
	130: "-1+145-14",
	129: "114+5*-(1-4)",
	128: "1+1+(4+5)*14",
	127: "1-14*(5-14)",
	126: "1*(14-5)*14",
	125: "-1-14*(5-14)",
	124: "114+5+1+4",
	123: "114-5+14",
	122: "114+5-1+4",
	121: "11*(45-1)/4",
	120: "-(1+1)*4*5*(1-4)",
	118: "(1+1)*(45+14)",
	117: "(1-14)*(5-14)",
	116: "114+5+1-4",
	115: "114+5*1-4",
	114: "11*4+5*14",
	113: "114-5/1+4",
	112: "114-5-1+4",
	111: "11+4*5*(1+4)",
	110: "-(11-451)/4",
	107: "11-4*-(5+1)*4",
	106: "114-5+1-4",
	105: "114+5-14",
	104: "114-5-1-4",
	103: "11*(4+5)+1*4",
	102: "11*(4+5)-1+4",
	101: "1+1*4*5*(1+4)",
	100: "1*(1+4)*5*1*4",
	99: "11*4+51+4",
	98: "1+1+4*(5+1)*4",
	97: "1+1*4*(5+1)*4",
	96: "11*(4+5)+1-4",
	95: "114-5-14",
	94: "114-5/1*4",
	93: "(1+1)*45-1+4",
	92: "(1+1)*(45-1)+4",
	91: "11*4+51-4",
	90: "-114+51*4",
	89: "(1+14)*5+14",
	88: "1*14*(5+1)+4",
	87: "11+4*(5+14)",
	86: "(1+1)*45*1-4",
	85: "1+14+5*14",
	84: "1*14+5*14",
	83: "-1+14+5*14",
	82: "1+1+4*5/1*4",
	81: "1/1+4*5*1*4",
	80: "1-1+4*5*1*4",
	79: "1*-1+4*5/1*4",
	78: "(1+1)*4+5*14",
	77: "11-4+5*14",
	76: "1+1+4+5*14",
	75: "1+14*5*1+4",
	74: "1/1*4+5*14",
	73: "1*14*5-1+4",
	72: "-1-1+4+5*14",
	71: "(1+14)*5-1*4",
	70: "11+45+14",
	69: "1*14+51+4",
	68: "1+1-4+5*14",
	67: "1-1*4+5*14",
	66: "1*14*5-1*4",
	65: "1*14*5-1-4",
	64: "11*4+5*1*4",
	63: "11*4+5+14",
	62: "1+14+51-4",
	61: "1+1+45+14",
	60: "11+45*1+4",
	59: "114-51-4",
	58: "-1+1*45+14",
	57: "1+14*5-14",
	56: "1*14*5-14",
	55: "-1+14*5-14",
	54: "11-4+51-4",
	53: "11+45+1-4",
	52: "11+45/1-4",
	51: "11+45-1-4",
	50: "1+1*45/1+4",
	49: "1*1*45/1+4",
	48: "-11+45+14",
	47: "1/-1+45-1+4",
	46: "11*4+5+1-4",
	45: "11+4*5+14",
	44: "114-5*14",
	43: "1+1*45+1-4",
	42: "11+45-14",
	41: "1/1*45*1-4",
	40: "-11+4*51/4",
	39: "-11+45+1+4",
	38: "-11+45*1+4",
	37: "-11+45-1+4",
	36: "11+4*5+1+4",
	35: "11*4+5-14",
	34: "1-14+51-4",
	33: "1+1+45-14",
	32: "1*1+45-14",
	31: "1/1*45-14",
	30: "1*-1+45-14",
	29: "-11+45-1-4",
	28: "11+4*5+1-4",
	27: "11+4*5/1-4",
	26: "11-4+5+14",
	25: "11*4-5-14",
	24: "1+14-5+14",
	23: "1*14-5+14",
	22: "1*14+5-1+4",
	21: "-1-1+4+5+14",
	20: "-11+45-14",
	19: "1+1+4*5+1-4",
	18: "1+1+4*5*1-4",
	17: "11+4*5-14",
	16: "11-4-5+14",
	15: "1+14-5+1+4",
	14: "11+4-5/1+4",
	13: "1*14-5/1+4",
	12: "-11+4+5+14",
	11: "11*-4+51+4",
	10: "-11/4+51/4",
	9: "11-4+5+1-4",
	8: "11-4+5/1-4",
	7: "11-4+5-1-4",
	6: "1-14+5+14",
	5: "11-4*5+14",
	4: "-11-4+5+14",
	3: "11*-4+51-4",
	2: "-11+4-5+14",
	1: "11/(45-1)*4",
	0: "(1-1)*4514",
	"⑨": "11-4-5+1-4",
})

if (typeof module === 'object' && module.exports)
	module.exports = homo