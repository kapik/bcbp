// IATA BCBP Version 6

module.exports = [
	{
		name: "formatCode",
		type: "string",
		unique: true,
		meta: true,
		mandatory: true,
		length: 1,
		default: "M"
	},
	{
		name: "numberOfLegs",
		type: "string",
		unique: true,
		meta: true,
		mandatory: true,
		length: 1,
		default: ""
	},
	{
		name: "passengerName",
		type: "string",
		unique: true,
		mandatory: true,
		length: 20,
		default: ""
	},
	{
		name: "electronicTicketIndicator",
		type: "string",
		unique: true,
		meta: true,
		mandatory: true,
		length: 1,
		default: "E"
	},
	{
		name: "operatingCarrierPNR",
		type: "string",
		unique: false,
		mandatory: true,
		length: 7,
		default: ""
	},
	{
		name: "departureAirport",
		type: "string",
		unique: false,
		mandatory: true,
		length: 3,
		default: ""
	},
	{
		name: "arrivalAirport",
		type: "string",
		unique: false,
		mandatory: true,
		length: 3,
		default: ""
	},
	{
		name: "operatingCarrierDesignator",
		type: "string",
		unique: false,
		mandatory: true,
		length: 3,
		default: ""
	},
	{
		name: "flightNumber",
		type: "string",
		unique: false,
		mandatory: true,
		length: 5,
		default: ""
	},
	{
		name: "flightDate",
		type: "date",
		unique: false,
		mandatory: true,
		length: 3,
		default: ""
	},
	{
		name: "compartmentCode",
		type: "string",
		unique: false,
		mandatory: true,
		length: 1,
		default: ""
	},
	{
		name: "seatNumber",
		type: "string",
		unique: false,
		mandatory: true,
		length: 4,
		default: ""
	},
	{
		name: "checkInSequenceNumber",
		type: "string",
		unique: false,
		mandatory: true,
		length: 5,
		default: ""
	},
	{
		name: "passengerStatus",
		type: "string",
		unique: false,
		mandatory: true,
		length: 1,
		default: ""
	},
	{
		name: "fieldSizeConditional",
		type: "string",
		unique: false,
		meta: true,
		mandatory: true,
		length: 2,
		default: "",
		fields: [
			{
				name: "versionNumberIndicator",
				type: "string",
				unique: true,
				meta: true,
				length: 1,
				default: ">"
			},
			{
				name: "versionNumber",
				type: "string",
				unique: true,
				meta: true,
				length: 1,
				default: "6"
			},
			{
				name: "fieldSizeA",
				type: "string",
				unique: true,
				meta: true,
				length: 2,
				default: "",
				fields: [
					{
						name: "passengerDescription",
						type: "string",
						unique: true,
						length: 1,
						default: ""
					},
					{
						name: "checkInSource",
						type: "string",
						unique: true,
						length: 1,
						default: ""
					},
					{
						name: "boardingPassIssuanceSource",
						type: "string",
						unique: true,
						length: 1,
						default: ""
					},
					{
						name: "issuanceDate",
						type: "dateWithYear",
						unique: true,
						length: 4,
						default: ""
					},
					{
						name: "documentType",
						type: "string",
						unique: true,
						length: 1,
						default: ""
					},
					{
						name: "boardingPassIssuerDesignator",
						type: "string",
						unique: true,
						length: 3,
						default: ""
					},
					{
						name: "baggageTagNumber",
						type: "string",
						unique: true,
						length: 13,
						default: ""
					},
					{
						name: "firstBaggageTagNumber",
						type: "string",
						unique: true,
						length: 13,
						default: ""
					},
					{
						name: "secondBaggageTagNumber",
						type: "string",
						unique: true,
						length: 13,
						default: ""
					},
				]
			},
			{
				name: "fieldSizeB",
				type: "string",
				unique: false,
				meta: true,
				length: 2,
				default: "",
				fields: [
					{
						name: "airlineNumericCode",
						type: "string",
						unique: false,
						length: 3,
						default: ""
					},
					{
						name: "serialNumber",
						type: "string",
						unique: false,
						length: 10,
						default: ""
					},
					{
						name: "selecteeIndicator",
						type: "string",
						unique: false,
						length: 1,
						default: ""
					},
					{
						name: "internationalDocumentationVerification",
						type: "string",
						unique: false,
						length: 1,
						default: ""
					},
					{
						name: "marketingCarrierDesignator",
						type: "string",
						unique: false,
						length: 3,
						default: ""
					},
					{
						name: "frequentFlyerAirlineDesignator",
						type: "string",
						unique: false,
						length: 3,
						default: ""
					},
					{
						name: "frequentFlyerNumber",
						type: "string",
						unique: false,
						length: 16,
						default: ""
					},
					{
						name: "idIndicator",
						type: "string",
						unique: false,
						length: 1,
						default: ""
					},
					{
						name: "freeBaggageAllowance",
						type: "string",
						unique: false,
						length: 3,
						default: ""
					},
					{
						name: "fastTrack",
						type: "boolean",
						unique: false,
						length: 1,
						default: ""
					},
				]
			},
			{
				name: "airlineInfo",
				type: "string",
				unique: false,
				default: ""
			},
		]
	},
	{
		name: "securityDataIndicator",
		type: "string",
		unique: true,
		meta: true,
		isSecurityField: true,
		length: 1,
		default: "^"
	},
	{
		name: "securityDataType",
		type: "string",
		unique: true,
		isSecurityField: true,
		length: 1,
		default: ""
	},
	{
		name: "securityDataSize",
		type: "string",
		unique: true,
		meta: true,
		isSecurityField: true,
		length: 2,
		default: "",
		fields: [
			{
				name: "securityData",
				type: "string",
				unique: true,
				isSecurityField: true,
				length: 100,
				default: ""
			}
		]
	},
];