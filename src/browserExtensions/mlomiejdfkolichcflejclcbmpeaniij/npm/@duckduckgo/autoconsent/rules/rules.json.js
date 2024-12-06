const autoconsent = [
	{
		name: "192.com",
		detectCmp: [
			{
				exists: ".ont-cookies"
			}
		],
		detectPopup: [
			{
				visible: ".ont-cookies"
			}
		],
		optIn: [
			{
				click: ".ont-btn-main.ont-cookies-btn.js-ont-btn-ok2"
			}
		],
		optOut: [
			{
				click: ".ont-cookes-btn-manage"
			},
			{
				click: ".ont-btn-main.ont-cookies-btn.js-ont-btn-choose"
			}
		],
		test: [
			{
				"eval": "EVAL_ONENINETWO_0"
			}
		]
	},
	{
		name: "1password-com",
		cosmetic: true,
		prehideSelectors: [
			"footer #footer-root [aria-label=\"Cookie Consent\"]"
		],
		detectCmp: [
			{
				exists: "footer #footer-root [aria-label=\"Cookie Consent\"]"
			}
		],
		detectPopup: [
			{
				visible: "footer #footer-root [aria-label=\"Cookie Consent\"]"
			}
		],
		optIn: [
			{
				click: "footer #footer-root [aria-label=\"Cookie Consent\"] button"
			}
		],
		optOut: [
			{
				hide: "footer #footer-root [aria-label=\"Cookie Consent\"]"
			}
		]
	},
	{
		name: "aa",
		vendorUrl: "https://aa.com",
		prehideSelectors: [
		],
		cosmetic: true,
		detectCmp: [
			{
				exists: "#aa_optoutmulti-Modal,#cookieBannerMessage"
			}
		],
		detectPopup: [
			{
				visible: "#aa_optoutmulti-Modal,#cookieBannerMessage"
			}
		],
		optIn: [
			{
				hide: "#aa_optoutmulti-Modal,#cookieBannerMessage"
			},
			{
				waitForThenClick: "#aa_optoutmulti_checkBox"
			},
			{
				waitForThenClick: "#aa_optoutmulti-Modal button.optoutmulti_button"
			}
		],
		optOut: [
			{
				hide: "#aa_optoutmulti-Modal,#cookieBannerMessage"
			}
		]
	},
	{
		name: "abc",
		vendorUrl: "https://abc.net.au",
		runContext: {
			urlPattern: "^https://([a-z0-9-]+\\.)?abc\\.net\\.au/"
		},
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: "[data-component=CookieBanner]"
			}
		],
		detectPopup: [
			{
				visible: "[data-component=CookieBanner] [data-component=CookieBanner_AcceptAll]"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-component=CookieBanner] [data-component=CookieBanner_AcceptAll]"
			}
		],
		optOut: [
			{
				waitForThenClick: "[data-component=CookieBanner] [data-component=CookieBanner_AcceptABCRequired]"
			}
		],
		test: [
			{
				"eval": "EVAL_ABC_TEST"
			}
		]
	},
	{
		name: "abconcerts.be",
		vendorUrl: "https://unknown",
		intermediate: false,
		prehideSelectors: [
			"dialog.cookie-consent"
		],
		detectCmp: [
			{
				exists: "dialog.cookie-consent form.cookie-consent__form"
			}
		],
		detectPopup: [
			{
				visible: "dialog.cookie-consent form.cookie-consent__form"
			}
		],
		optIn: [
			{
				waitForThenClick: "dialog.cookie-consent form.cookie-consent__form button[value=yes]"
			}
		],
		optOut: [
			{
				"if": {
					exists: "dialog.cookie-consent form.cookie-consent__form button[value=no]"
				},
				then: [
					{
						click: "dialog.cookie-consent form.cookie-consent__form button[value=no]"
					}
				],
				"else": [
					{
						click: "dialog.cookie-consent form.cookie-consent__form button.cookie-consent__options-toggle"
					},
					{
						waitForThenClick: "dialog.cookie-consent form.cookie-consent__form button[value=\"save_options\"]"
					}
				]
			}
		]
	},
	{
		name: "acris",
		prehideSelectors: [
			"div.acris-cookie-consent"
		],
		detectCmp: [
			{
				exists: "[data-acris-cookie-consent]"
			}
		],
		detectPopup: [
			{
				visible: ".acris-cookie-consent.is--modal"
			}
		],
		optIn: [
			{
				waitForVisible: "#ccConsentAcceptAllButton",
				check: "any"
			},
			{
				wait: 500
			},
			{
				waitForThenClick: "#ccConsentAcceptAllButton"
			}
		],
		optOut: [
			{
				waitForVisible: "#ccAcceptOnlyFunctional",
				check: "any"
			},
			{
				wait: 500
			},
			{
				waitForThenClick: "#ccAcceptOnlyFunctional"
			}
		]
	},
	{
		name: "activobank.pt",
		runContext: {
			urlPattern: "^https://(www\\.)?activobank\\.pt"
		},
		prehideSelectors: [
			"aside#cookies,.overlay-cookies"
		],
		detectCmp: [
			{
				exists: "#cookies .cookies-btn"
			}
		],
		detectPopup: [
			{
				visible: "#cookies #submitCookies"
			}
		],
		optIn: [
			{
				waitForThenClick: "#cookies #submitCookies"
			}
		],
		optOut: [
			{
				waitForThenClick: "#cookies #rejectCookies"
			}
		]
	},
	{
		name: "Adroll",
		prehideSelectors: [
			"#adroll_consent_container"
		],
		detectCmp: [
			{
				exists: "#adroll_consent_container"
			}
		],
		detectPopup: [
			{
				visible: "#adroll_consent_container"
			}
		],
		optIn: [
			{
				waitForThenClick: "#adroll_consent_accept"
			}
		],
		optOut: [
			{
				waitForThenClick: "#adroll_consent_reject"
			}
		],
		test: [
			{
				"eval": "EVAL_ADROLL_0"
			}
		]
	},
	{
		name: "affinity.serif.com",
		detectCmp: [
			{
				exists: ".c-cookie-banner button[data-qa='allow-all-cookies']"
			}
		],
		detectPopup: [
			{
				visible: ".c-cookie-banner"
			}
		],
		optIn: [
			{
				click: "button[data-qa=\"allow-all-cookies\"]"
			}
		],
		optOut: [
			{
				click: "button[data-qa=\"manage-cookies\"]"
			},
			{
				waitFor: ".c-cookie-banner ~ [role=\"dialog\"]"
			},
			{
				waitForThenClick: ".c-cookie-banner ~ [role=\"dialog\"] input[type=\"checkbox\"][value=\"true\"]",
				all: true
			},
			{
				click: ".c-cookie-banner ~ [role=\"dialog\"] .c-modal__action button"
			}
		],
		test: [
			{
				wait: 500
			},
			{
				"eval": "EVAL_AFFINITY_SERIF_COM_0"
			}
		]
	},
	{
		name: "agolde.com",
		cosmetic: true,
		prehideSelectors: [
			"#modal-1 div[data-micromodal-close]"
		],
		detectCmp: [
			{
				exists: "#modal-1 div[aria-labelledby=modal-1-title]"
			}
		],
		detectPopup: [
			{
				exists: "#modal-1 div[data-micromodal-close]"
			}
		],
		optIn: [
			{
				click: "button[aria-label=\"Close modal\"]"
			}
		],
		optOut: [
			{
				hide: "#modal-1 div[data-micromodal-close]"
			}
		]
	},
	{
		name: "aliexpress",
		vendorUrl: "https://aliexpress.com/",
		runContext: {
			urlPattern: "^https://.*\\.aliexpress\\.com/"
		},
		prehideSelectors: [
			"#gdpr-new-container"
		],
		detectCmp: [
			{
				exists: "#gdpr-new-container,#voyager-gdpr > div"
			}
		],
		detectPopup: [
			{
				visible: "#gdpr-new-container,#voyager-gdpr > div"
			}
		],
		optIn: [
			{
				waitForThenClick: "#gdpr-new-container .btn-accept,#voyager-gdpr > div > div > button:nth-child(1)"
			}
		],
		optOut: [
			{
				"if": {
					exists: "#voyager-gdpr > div"
				},
				then: [
					{
						waitForThenClick: "#voyager-gdpr > div > div > button:nth-child(2)"
					}
				],
				"else": [
					{
						waitForThenClick: "#gdpr-new-container .btn-more"
					},
					{
						waitFor: "#gdpr-new-container .gdpr-dialog-switcher"
					},
					{
						click: "#gdpr-new-container .switcher-on",
						all: true,
						optional: true
					},
					{
						click: "#gdpr-new-container .btn-save"
					}
				]
			}
		]
	},
	{
		name: "almacmp",
		prehideSelectors: [
			"#alma-cmpv2-container"
		],
		detectCmp: [
			{
				exists: "#alma-cmpv2-container"
			}
		],
		detectPopup: [
			{
				visible: "#alma-cmpv2-container #almacmp-modal-layer1"
			}
		],
		optIn: [
			{
				waitForThenClick: "#alma-cmpv2-container #almacmp-modal-layer1 #almacmp-modalConfirmBtn"
			}
		],
		optOut: [
			{
				waitForThenClick: "#alma-cmpv2-container #almacmp-modal-layer1 #almacmp-modalSettingBtn"
			},
			{
				waitFor: "#alma-cmpv2-container #almacmp-modal-layer2"
			},
			{
				waitForThenClick: "#alma-cmpv2-container #almacmp-modal-layer2 #almacmp-reject-all-layer2"
			}
		],
		test: [
			{
				"eval": "EVAL_ALMACMP_0"
			}
		]
	},
	{
		name: "altium.com",
		cosmetic: true,
		prehideSelectors: [
			".altium-privacy-bar"
		],
		detectCmp: [
			{
				exists: ".altium-privacy-bar"
			}
		],
		detectPopup: [
			{
				exists: ".altium-privacy-bar"
			}
		],
		optIn: [
			{
				click: "a.altium-privacy-bar__btn"
			}
		],
		optOut: [
			{
				hide: ".altium-privacy-bar"
			}
		]
	},
	{
		name: "amazon.com",
		prehideSelectors: [
			"span[data-action=\"sp-cc\"][data-sp-cc*=\"rejectAllAction\"]"
		],
		detectCmp: [
			{
				exists: "span[data-action=\"sp-cc\"][data-sp-cc*=\"rejectAllAction\"]"
			}
		],
		detectPopup: [
			{
				visible: "span[data-action=\"sp-cc\"][data-sp-cc*=\"rejectAllAction\"]"
			}
		],
		optIn: [
			{
				waitForVisible: "#sp-cc-accept"
			},
			{
				wait: 500
			},
			{
				click: "#sp-cc-accept"
			}
		],
		optOut: [
			{
				waitForVisible: "#sp-cc-rejectall-link"
			},
			{
				wait: 500
			},
			{
				click: "#sp-cc-rejectall-link"
			}
		]
	},
	{
		name: "amex",
		vendorUrl: "https://www.americanexpress.com/",
		cosmetic: false,
		prehideSelectors: [
			"#user-consent-management-granular-banner-overlay"
		],
		detectCmp: [
			{
				exists: "#user-consent-management-granular-banner-overlay"
			}
		],
		detectPopup: [
			{
				visible: "#user-consent-management-granular-banner-overlay"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-testid=granular-banner-button-accept-all]"
			}
		],
		optOut: [
			{
				waitForThenClick: "[data-testid=granular-banner-button-decline-all]"
			}
		]
	},
	{
		name: "aquasana.com",
		prehideSelectors: [
			"#consent-tracking"
		],
		detectCmp: [
			{
				exists: "#consent-tracking"
			}
		],
		detectPopup: [
			{
				exists: "#consent-tracking"
			}
		],
		optIn: [
			{
				waitForThenClick: "#consent-tracking .affirm.btn"
			}
		],
		optOut: [
			{
				"if": {
					exists: "#consent-tracking .decline.btn"
				},
				then: [
					{
						click: "#consent-tracking .decline.btn"
					}
				],
				"else": [
					{
						hide: "#consent-tracking"
					}
				]
			}
		]
	},
	{
		name: "arbeitsagentur",
		vendorUrl: "https://www.arbeitsagentur.de/",
		prehideSelectors: [
			".modal-open bahf-cookie-disclaimer-dpl3"
		],
		detectCmp: [
			{
				exists: "bahf-cookie-disclaimer-dpl3"
			}
		],
		detectPopup: [
			{
				visible: "bahf-cookie-disclaimer-dpl3"
			}
		],
		optIn: [
			{
				waitForThenClick: [
					"bahf-cookie-disclaimer-dpl3",
					"bahf-cd-modal-dpl3 .ba-btn-primary"
				]
			}
		],
		optOut: [
			{
				waitForThenClick: [
					"bahf-cookie-disclaimer-dpl3",
					"bahf-cd-modal-dpl3 .ba-btn-contrast"
				]
			}
		],
		test: [
			{
				"eval": "EVAL_ARBEITSAGENTUR_TEST"
			}
		]
	},
	{
		name: "asus",
		vendorUrl: "https://www.asus.com/",
		runContext: {
			urlPattern: "^https://www\\.asus\\.com/"
		},
		prehideSelectors: [
			"#cookie-policy-info,#cookie-policy-info-bg"
		],
		detectCmp: [
			{
				exists: "#cookie-policy-info"
			}
		],
		detectPopup: [
			{
				visible: "#cookie-policy-info"
			}
		],
		optIn: [
			{
				waitForThenClick: "#cookie-policy-info [data-agree=\"Accept Cookies\"]"
			}
		],
		optOut: [
			{
				"if": {
					exists: "#cookie-policy-info .btn-reject"
				},
				then: [
					{
						waitForThenClick: "#cookie-policy-info .btn-reject"
					}
				],
				"else": [
					{
						waitForThenClick: "#cookie-policy-info .btn-setting"
					},
					{
						waitForThenClick: "#cookie-policy-lightbox-wrapper [data-agree=\"Save Settings\"]"
					}
				]
			}
		]
	},
	{
		name: "athlinks-com",
		runContext: {
			urlPattern: "^https://(www\\.)?athlinks\\.com/"
		},
		cosmetic: true,
		prehideSelectors: [
			"#footer-container ~ div"
		],
		detectCmp: [
			{
				exists: "#footer-container ~ div"
			}
		],
		detectPopup: [
			{
				visible: "#footer-container > div"
			}
		],
		optIn: [
			{
				click: "#footer-container ~ div button"
			}
		],
		optOut: [
			{
				hide: "#footer-container ~ div"
			}
		]
	},
	{
		name: "ausopen.com",
		cosmetic: true,
		detectCmp: [
			{
				exists: ".gdpr-popup__message"
			}
		],
		detectPopup: [
			{
				visible: ".gdpr-popup__message"
			}
		],
		optOut: [
			{
				hide: ".gdpr-popup__message"
			}
		],
		optIn: [
			{
				click: ".gdpr-popup__message button"
			}
		]
	},
	{
		name: "automattic-cmp-optout",
		prehideSelectors: [
			"form[class*=\"cookie-banner\"][method=\"post\"]"
		],
		detectCmp: [
			{
				exists: "form[class*=\"cookie-banner\"][method=\"post\"]"
			}
		],
		detectPopup: [
			{
				visible: "form[class*=\"cookie-banner\"][method=\"post\"]"
			}
		],
		optIn: [
			{
				click: "a[class*=\"accept-all-button\"]"
			}
		],
		optOut: [
			{
				click: "form[class*=\"cookie-banner\"] div[class*=\"simple-options\"] a[class*=\"customize-button\"]"
			},
			{
				waitForThenClick: "input[type=checkbox][checked]:not([disabled])",
				all: true
			},
			{
				click: "a[class*=\"accept-selection-button\"]"
			}
		]
	},
	{
		name: "aws.amazon.com",
		prehideSelectors: [
			"#awsccc-cb-content",
			"#awsccc-cs-container",
			"#awsccc-cs-modalOverlay",
			"#awsccc-cs-container-inner"
		],
		detectCmp: [
			{
				exists: "#awsccc-cb-content"
			}
		],
		detectPopup: [
			{
				visible: "#awsccc-cb-content"
			}
		],
		optIn: [
			{
				click: "button[data-id=awsccc-cb-btn-accept"
			}
		],
		optOut: [
			{
				click: "button[data-id=awsccc-cb-btn-customize]"
			},
			{
				waitFor: "input[aria-checked]"
			},
			{
				click: "input[aria-checked=true]",
				all: true,
				optional: true
			},
			{
				click: "button[data-id=awsccc-cs-btn-save]"
			}
		]
	},
	{
		name: "axeptio",
		prehideSelectors: [
			".axeptio_widget"
		],
		detectCmp: [
			{
				exists: ".axeptio_widget"
			}
		],
		detectPopup: [
			{
				visible: ".axeptio_widget"
			}
		],
		optIn: [
			{
				waitFor: ".axeptio-widget--open"
			},
			{
				click: "button#axeptio_btn_acceptAll"
			}
		],
		optOut: [
			{
				waitFor: ".axeptio-widget--open"
			},
			{
				click: "button#axeptio_btn_dismiss"
			}
		],
		test: [
			{
				"eval": "EVAL_AXEPTIO_0"
			}
		]
	},
	{
		name: "baden-wuerttemberg.de",
		prehideSelectors: [
			".cookie-alert.t-dark"
		],
		cosmetic: true,
		detectCmp: [
			{
				exists: ".cookie-alert.t-dark"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-alert.t-dark"
			}
		],
		optIn: [
			{
				click: ".cookie-alert__form input:not([disabled]):not([checked])"
			},
			{
				click: ".cookie-alert__button button"
			}
		],
		optOut: [
			{
				hide: ".cookie-alert.t-dark"
			}
		]
	},
	{
		name: "bahn-de",
		vendorUrl: "https://www.bahn.de/",
		cosmetic: false,
		runContext: {
			main: true,
			frame: false,
			urlPattern: "^https://(www\\.)?bahn\\.de/"
		},
		intermediate: false,
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: [
					"body > div:first-child",
					"#consent-layer"
				]
			}
		],
		detectPopup: [
			{
				visible: [
					"body > div:first-child",
					"#consent-layer"
				]
			}
		],
		optIn: [
			{
				waitForThenClick: [
					"body > div:first-child",
					"#consent-layer .js-accept-all-cookies"
				]
			}
		],
		optOut: [
			{
				waitForThenClick: [
					"body > div:first-child",
					"#consent-layer .js-accept-essential-cookies"
				]
			}
		],
		test: [
			{
				"eval": "EVAL_BAHN_TEST"
			}
		]
	},
	{
		name: "bbb.org",
		runContext: {
			urlPattern: "^https://www\\.bbb\\.org/"
		},
		cosmetic: true,
		prehideSelectors: [
			"div[aria-label=\"use of cookies on bbb.org\"]"
		],
		detectCmp: [
			{
				exists: "div[aria-label=\"use of cookies on bbb.org\"]"
			}
		],
		detectPopup: [
			{
				visible: "div[aria-label=\"use of cookies on bbb.org\"]"
			}
		],
		optIn: [
			{
				click: "div[aria-label=\"use of cookies on bbb.org\"] button.bds-button-unstyled span.visually-hidden"
			}
		],
		optOut: [
			{
				hide: "div[aria-label=\"use of cookies on bbb.org\"]"
			}
		]
	},
	{
		name: "bing.com",
		prehideSelectors: [
			"#bnp_container"
		],
		detectCmp: [
			{
				exists: "#bnp_cookie_banner"
			}
		],
		detectPopup: [
			{
				visible: "#bnp_cookie_banner"
			}
		],
		optIn: [
			{
				click: "#bnp_btn_accept"
			}
		],
		optOut: [
			{
				click: "#bnp_btn_preference"
			},
			{
				click: "#mcp_savesettings"
			}
		],
		test: [
			{
				"eval": "EVAL_BING_0"
			}
		]
	},
	{
		name: "blocksy",
		vendorUrl: "https://creativethemes.com/blocksy/docs/extensions/cookies-consent/",
		cosmetic: false,
		runContext: {
			main: true,
			frame: false
		},
		intermediate: false,
		prehideSelectors: [
			".cookie-notification"
		],
		detectCmp: [
			{
				exists: "#blocksy-ext-cookies-consent-styles-css"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-notification"
			}
		],
		optIn: [
			{
				click: ".cookie-notification .ct-cookies-decline-button"
			}
		],
		optOut: [
			{
				waitForThenClick: ".cookie-notification .ct-cookies-decline-button"
			}
		],
		test: [
			{
				"eval": "EVAL_BLOCKSY_0"
			}
		]
	},
	{
		name: "borlabs",
		detectCmp: [
			{
				exists: "._brlbs-block-content"
			}
		],
		detectPopup: [
			{
				visible: "._brlbs-bar-wrap,._brlbs-box-wrap"
			}
		],
		optIn: [
			{
				click: "a[data-cookie-accept-all]"
			}
		],
		optOut: [
			{
				click: "a[data-cookie-individual]"
			},
			{
				waitForVisible: ".cookie-preference"
			},
			{
				click: "input[data-borlabs-cookie-checkbox]:checked",
				all: true,
				optional: true
			},
			{
				click: "#CookiePrefSave"
			},
			{
				wait: 500
			}
		],
		prehideSelectors: [
			"#BorlabsCookieBox"
		],
		test: [
			{
				"eval": "EVAL_BORLABS_0"
			}
		]
	},
	{
		name: "bundesregierung.de",
		prehideSelectors: [
			".bpa-cookie-banner"
		],
		detectCmp: [
			{
				exists: ".bpa-cookie-banner"
			}
		],
		detectPopup: [
			{
				visible: ".bpa-cookie-banner .bpa-module-full-hero"
			}
		],
		optIn: [
			{
				click: ".bpa-accept-all-button"
			}
		],
		optOut: [
			{
				wait: 500,
				comment: "click is not immediately recognized"
			},
			{
				waitForThenClick: ".bpa-close-button"
			}
		],
		test: [
			{
				"eval": "EVAL_BUNDESREGIERUNG_DE_0"
			}
		]
	},
	{
		name: "burpee.com",
		cosmetic: true,
		prehideSelectors: [
			"#notice-cookie-block"
		],
		detectCmp: [
			{
				exists: "#notice-cookie-block"
			}
		],
		detectPopup: [
			{
				exists: "#html-body #notice-cookie-block"
			}
		],
		optIn: [
			{
				click: "#btn-cookie-allow"
			}
		],
		optOut: [
			{
				hide: "#html-body #notice-cookie-block, #notice-cookie"
			}
		]
	},
	{
		name: "canva.com",
		prehideSelectors: [
			"div[role=\"dialog\"] a[data-anchor-id=\"cookie-policy\"]"
		],
		detectCmp: [
			{
				exists: "div[role=\"dialog\"] a[data-anchor-id=\"cookie-policy\"]"
			}
		],
		detectPopup: [
			{
				exists: "div[role=\"dialog\"] a[data-anchor-id=\"cookie-policy\"]"
			}
		],
		optIn: [
			{
				click: "div[role=\"dialog\"] button:nth-child(1)"
			}
		],
		optOut: [
			{
				"if": {
					exists: "div[role=\"dialog\"] button:nth-child(3)"
				},
				then: [
					{
						click: "div[role=\"dialog\"] button:nth-child(2)"
					}
				],
				"else": [
					{
						click: "div[role=\"dialog\"] button:nth-child(2)"
					},
					{
						waitFor: "div[role=\"dialog\"] a[data-anchor-id=\"cookie-policy\"]"
					},
					{
						waitFor: "div[role=\"dialog\"] button[role=switch]"
					},
					{
						click: "div[role=\"dialog\"] button:nth-child(2):not([role])"
					},
					{
						click: "div[role=\"dialog\"] div:last-child button:only-child"
					}
				]
			}
		],
		test: [
			{
				"eval": "EVAL_CANVA_0"
			}
		]
	},
	{
		name: "canyon.com",
		runContext: {
			urlPattern: "^https://www\\.canyon\\.com/"
		},
		prehideSelectors: [
			"div.modal.cookiesModal.is-open"
		],
		detectCmp: [
			{
				exists: "div.modal.cookiesModal.is-open"
			}
		],
		detectPopup: [
			{
				visible: "div.modal.cookiesModal.is-open"
			}
		],
		optIn: [
			{
				click: "div.cookiesModal__buttonWrapper > button[data-closecause=\"close-by-submit\"]"
			}
		],
		optOut: [
			{
				click: "div.cookiesModal__buttonWrapper > button[data-closecause=\"close-by-manage-cookies\"]"
			},
			{
				waitForThenClick: "button#js-manage-data-privacy-save-button"
			}
		]
	},
	{
		name: "cc-banner-springer",
		prehideSelectors: [
			".cc-banner[data-cc-banner]"
		],
		detectCmp: [
			{
				exists: ".cc-banner[data-cc-banner]"
			}
		],
		detectPopup: [
			{
				visible: ".cc-banner[data-cc-banner]"
			}
		],
		optIn: [
			{
				waitForThenClick: ".cc-banner[data-cc-banner] button[data-cc-action=accept]"
			}
		],
		optOut: [
			{
				"if": {
					exists: ".cc-banner[data-cc-banner] button[data-cc-action=reject]"
				},
				then: [
					{
						click: ".cc-banner[data-cc-banner] button[data-cc-action=reject]"
					}
				],
				"else": [
					{
						waitForThenClick: ".cc-banner[data-cc-banner] button[data-cc-action=preferences]"
					},
					{
						waitFor: ".cc-preferences[data-cc-preferences]"
					},
					{
						click: ".cc-preferences[data-cc-preferences] input[type=radio][data-cc-action=toggle-category][value=off]",
						all: true,
						optional: true
					},
					{
						"if": {
							exists: ".cc-preferences[data-cc-preferences] button[data-cc-action=reject]"
						},
						then: [
							{
								click: ".cc-preferences[data-cc-preferences] button[data-cc-action=reject]"
							}
						],
						"else": [
							{
								click: ".cc-preferences[data-cc-preferences] button[data-cc-action=save]"
							}
						]
					}
				]
			}
		],
		test: [
			{
				"eval": "EVAL_CC_BANNER2_0"
			}
		]
	},
	{
		name: "cc_banner",
		cosmetic: true,
		prehideSelectors: [
			".cc_banner-wrapper"
		],
		detectCmp: [
			{
				exists: ".cc_banner-wrapper"
			}
		],
		detectPopup: [
			{
				visible: ".cc_banner"
			}
		],
		optIn: [
			{
				click: ".cc_btn_accept_all"
			}
		],
		optOut: [
			{
				hide: ".cc_banner-wrapper"
			}
		]
	},
	{
		name: "check24-partnerprogramm-de",
		prehideSelectors: [
			"[data-modal-content]:has([data-toggle-target^='cookie'])"
		],
		detectCmp: [
			{
				exists: "[data-toggle-target^='cookie']"
			}
		],
		detectPopup: [
			{
				visible: "[data-toggle-target^='cookie']",
				check: "any"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-cookie-accept-all]"
			}
		],
		optOut: [
			{
				waitForThenClick: "[data-cookie-dismiss-all]"
			}
		]
	},
	{
		name: "ciaopeople.it",
		prehideSelectors: [
			"#cp-gdpr-choices"
		],
		detectCmp: [
			{
				exists: "#cp-gdpr-choices"
			}
		],
		detectPopup: [
			{
				visible: "#cp-gdpr-choices"
			}
		],
		optIn: [
			{
				waitForThenClick: ".gdpr-btm__right > button:nth-child(2)"
			}
		],
		optOut: [
			{
				waitForThenClick: ".gdpr-top-content > button"
			},
			{
				waitFor: ".gdpr-top-back"
			},
			{
				waitForThenClick: ".gdpr-btm__right > button:nth-child(1)"
			}
		],
		test: [
			{
				visible: "#cp-gdpr-choices",
				check: "none"
			}
		]
	},
	{
		vendorUrl: "https://www.civicuk.com/cookie-control/",
		name: "civic-cookie-control",
		prehideSelectors: [
			"#ccc-module,#ccc-overlay"
		],
		detectCmp: [
			{
				exists: "#ccc-module"
			}
		],
		detectPopup: [
			{
				visible: "#ccc"
			},
			{
				visible: "#ccc-module"
			}
		],
		optOut: [
			{
				click: "#ccc-reject-settings"
			}
		],
		optIn: [
			{
				click: "#ccc-recommended-settings"
			}
		]
	},
	{
		name: "click.io",
		prehideSelectors: [
			"#cl-consent"
		],
		detectCmp: [
			{
				exists: "#cl-consent"
			}
		],
		detectPopup: [
			{
				visible: "#cl-consent"
			}
		],
		optIn: [
			{
				waitForThenClick: "#cl-consent [data-role=\"b_agree\"]"
			}
		],
		optOut: [
			{
				waitFor: "#cl-consent [data-role=\"b_options\"]"
			},
			{
				wait: 500
			},
			{
				click: "#cl-consent [data-role=\"b_options\"]"
			},
			{
				waitFor: ".cl-consent-popup.cl-consent-visible [data-role=\"alloff\"]"
			},
			{
				click: ".cl-consent-popup.cl-consent-visible [data-role=\"alloff\"]",
				all: true
			},
			{
				click: "[data-role=\"b_save\"]"
			}
		],
		test: [
			{
				"eval": "EVAL_CLICKIO_0",
				comment: "TODO: this only checks if we interacted at all"
			}
		]
	},
	{
		name: "clinch",
		intermediate: false,
		runContext: {
			frame: false,
			main: true
		},
		prehideSelectors: [
			".consent-modal[role=dialog]"
		],
		detectCmp: [
			{
				exists: ".consent-modal[role=dialog]"
			}
		],
		detectPopup: [
			{
				visible: ".consent-modal[role=dialog]"
			}
		],
		optIn: [
			{
				click: "#consent_agree"
			}
		],
		optOut: [
			{
				"if": {
					exists: "#consent_reject"
				},
				then: [
					{
						click: "#consent_reject"
					}
				],
				"else": [
					{
						click: "#manage_cookie_preferences"
					},
					{
						click: "#cookie_consent_preferences input:checked",
						all: true,
						optional: true
					},
					{
						click: "#consent_save"
					}
				]
			}
		],
		test: [
			{
				"eval": "EVAL_CLINCH_0"
			}
		]
	},
	{
		name: "clustrmaps.com",
		runContext: {
			urlPattern: "^https://(www\\.)?clustrmaps\\.com/"
		},
		cosmetic: true,
		prehideSelectors: [
			"#gdpr-cookie-message"
		],
		detectCmp: [
			{
				exists: "#gdpr-cookie-message"
			}
		],
		detectPopup: [
			{
				visible: "#gdpr-cookie-message"
			}
		],
		optIn: [
			{
				click: "button#gdpr-cookie-accept"
			}
		],
		optOut: [
			{
				hide: "#gdpr-cookie-message"
			}
		]
	},
	{
		name: "coinbase",
		intermediate: false,
		runContext: {
			frame: true,
			main: true,
			urlPattern: "^https://(www|help)\\.coinbase\\.com"
		},
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: "div[class^=CookieBannerContent__Container]"
			}
		],
		detectPopup: [
			{
				visible: "div[class^=CookieBannerContent__Container]"
			}
		],
		optIn: [
			{
				click: "div[class^=CookieBannerContent__CTA] :nth-last-child(1)"
			}
		],
		optOut: [
			{
				click: "button[class^=CookieBannerContent__Settings]"
			},
			{
				click: "div[class^=CookiePreferencesModal__CategoryContainer] input:checked",
				all: true,
				optional: true
			},
			{
				click: "div[class^=CookiePreferencesModal__ButtonContainer] > button"
			}
		],
		test: [
			{
				"eval": "EVAL_COINBASE_0"
			}
		]
	},
	{
		name: "Complianz banner",
		prehideSelectors: [
			"#cmplz-cookiebanner-container"
		],
		detectCmp: [
			{
				exists: "#cmplz-cookiebanner-container .cmplz-cookiebanner"
			}
		],
		detectPopup: [
			{
				visible: "#cmplz-cookiebanner-container .cmplz-cookiebanner",
				check: "any"
			}
		],
		optIn: [
			{
				waitForThenClick: ".cmplz-cookiebanner .cmplz-accept"
			}
		],
		optOut: [
			{
				waitForThenClick: ".cmplz-cookiebanner .cmplz-deny"
			}
		],
		test: [
			{
				"eval": "EVAL_COMPLIANZ_BANNER_0"
			}
		]
	},
	{
		name: "Complianz categories",
		prehideSelectors: [
			".cc-type-categories[aria-describedby=\"cookieconsent:desc\"]"
		],
		detectCmp: [
			{
				exists: ".cc-type-categories[aria-describedby=\"cookieconsent:desc\"]"
			}
		],
		detectPopup: [
			{
				visible: ".cc-type-categories[aria-describedby=\"cookieconsent:desc\"]"
			}
		],
		optIn: [
			{
				any: [
					{
						click: ".cc-accept-all"
					},
					{
						click: ".cc-allow-all"
					},
					{
						click: ".cc-allow"
					},
					{
						click: ".cc-dismiss"
					}
				]
			}
		],
		optOut: [
			{
				"if": {
					exists: ".cc-type-categories[aria-describedby=\"cookieconsent:desc\"] .cc-dismiss"
				},
				then: [
					{
						click: ".cc-dismiss"
					}
				],
				"else": [
					{
						click: ".cc-type-categories input[type=checkbox]:not([disabled]):checked",
						all: true,
						optional: true
					},
					{
						click: ".cc-save"
					}
				]
			}
		]
	},
	{
		name: "Complianz notice",
		prehideSelectors: [
			".cc-type-info[aria-describedby=\"cookieconsent:desc\"]"
		],
		cosmetic: true,
		detectCmp: [
			{
				exists: ".cc-type-info[aria-describedby=\"cookieconsent:desc\"] .cc-compliance .cc-btn"
			}
		],
		detectPopup: [
			{
				visible: ".cc-type-info[aria-describedby=\"cookieconsent:desc\"] .cc-compliance .cc-btn"
			}
		],
		optIn: [
			{
				click: ".cc-accept-all",
				optional: true
			},
			{
				click: ".cc-allow",
				optional: true
			},
			{
				click: ".cc-dismiss",
				optional: true
			}
		],
		optOut: [
			{
				"if": {
					exists: ".cc-deny"
				},
				then: [
					{
						click: ".cc-deny"
					}
				],
				"else": [
					{
						hide: "[aria-describedby=\"cookieconsent:desc\"]"
					}
				]
			}
		]
	},
	{
		name: "Complianz opt-both",
		prehideSelectors: [
			"[aria-describedby=\"cookieconsent:desc\"] .cc-type-opt-both"
		],
		detectCmp: [
			{
				exists: "[aria-describedby=\"cookieconsent:desc\"] .cc-type-opt-both"
			}
		],
		detectPopup: [
			{
				visible: "[aria-describedby=\"cookieconsent:desc\"] .cc-type-opt-both"
			}
		],
		optIn: [
			{
				click: ".cc-accept-all",
				optional: true
			},
			{
				click: ".cc-allow",
				optional: true
			},
			{
				click: ".cc-dismiss",
				optional: true
			}
		],
		optOut: [
			{
				waitForThenClick: ".cc-deny"
			}
		]
	},
	{
		name: "Complianz opt-out",
		prehideSelectors: [
			"[aria-describedby=\"cookieconsent:desc\"].cc-type-opt-out"
		],
		detectCmp: [
			{
				exists: "[aria-describedby=\"cookieconsent:desc\"].cc-type-opt-out"
			}
		],
		detectPopup: [
			{
				visible: "[aria-describedby=\"cookieconsent:desc\"].cc-type-opt-out"
			}
		],
		optIn: [
			{
				click: ".cc-accept-all",
				optional: true
			},
			{
				click: ".cc-allow",
				optional: true
			},
			{
				click: ".cc-dismiss",
				optional: true
			}
		],
		optOut: [
			{
				"if": {
					exists: ".cc-deny"
				},
				then: [
					{
						click: ".cc-deny"
					}
				],
				"else": [
					{
						"if": {
							exists: ".cmp-pref-link"
						},
						then: [
							{
								click: ".cmp-pref-link"
							},
							{
								waitForThenClick: ".cmp-body [id*=rejectAll]"
							},
							{
								waitForThenClick: ".cmp-body .cmp-save-btn"
							}
						]
					}
				]
			}
		]
	},
	{
		name: "Complianz optin",
		prehideSelectors: [
			".cc-type-opt-in[aria-describedby=\"cookieconsent:desc\"]"
		],
		detectCmp: [
			{
				exists: ".cc-type-opt-in[aria-describedby=\"cookieconsent:desc\"]"
			}
		],
		detectPopup: [
			{
				visible: ".cc-type-opt-in[aria-describedby=\"cookieconsent:desc\"]"
			}
		],
		optIn: [
			{
				any: [
					{
						click: ".cc-accept-all"
					},
					{
						click: ".cc-allow"
					},
					{
						click: ".cc-dismiss"
					}
				]
			}
		],
		optOut: [
			{
				"if": {
					visible: ".cc-deny"
				},
				then: [
					{
						click: ".cc-deny"
					}
				],
				"else": [
					{
						"if": {
							visible: ".cc-settings"
						},
						then: [
							{
								waitForThenClick: ".cc-settings"
							},
							{
								waitForVisible: ".cc-settings-view"
							},
							{
								click: ".cc-settings-view input[type=checkbox]:not([disabled]):checked",
								all: true,
								optional: true
							},
							{
								click: ".cc-settings-view .cc-btn-accept-selected"
							}
						],
						"else": [
							{
								click: ".cc-dismiss"
							}
						]
					}
				]
			}
		]
	},
	{
		name: "cookie-law-info",
		prehideSelectors: [
			"#cookie-law-info-bar"
		],
		detectCmp: [
			{
				exists: "#cookie-law-info-bar"
			},
			{
				"eval": "EVAL_COOKIE_LAW_INFO_DETECT"
			}
		],
		detectPopup: [
			{
				visible: "#cookie-law-info-bar"
			}
		],
		optIn: [
			{
				click: "[data-cli_action=\"accept_all\"]"
			}
		],
		optOut: [
			{
				hide: "#cookie-law-info-bar"
			},
			{
				"eval": "EVAL_COOKIE_LAW_INFO_0"
			}
		],
		test: [
			{
				"eval": "EVAL_COOKIE_LAW_INFO_1"
			}
		]
	},
	{
		name: "cookie-manager-popup",
		cosmetic: false,
		runContext: {
			main: true,
			frame: false
		},
		intermediate: false,
		detectCmp: [
			{
				exists: "#notice-cookie-block #allow-functional-cookies, #notice-cookie-block #btn-cookie-settings"
			}
		],
		detectPopup: [
			{
				visible: "#notice-cookie-block"
			}
		],
		optIn: [
			{
				click: "#btn-cookie-allow"
			}
		],
		optOut: [
			{
				"if": {
					exists: "#allow-functional-cookies"
				},
				then: [
					{
						click: "#allow-functional-cookies"
					}
				],
				"else": [
					{
						waitForThenClick: "#btn-cookie-settings"
					},
					{
						waitForVisible: ".modal-body"
					},
					{
						click: ".modal-body input:checked, .switch[data-switch=\"on\"]",
						all: true,
						optional: true
					},
					{
						click: "[role=\"dialog\"] .modal-footer button"
					}
				]
			}
		],
		prehideSelectors: [
			"#btn-cookie-settings"
		],
		test: [
			{
				"eval": "EVAL_COOKIE_MANAGER_POPUP_0"
			}
		]
	},
	{
		name: "cookie-notice",
		prehideSelectors: [
			"#cookie-notice"
		],
		cosmetic: true,
		detectCmp: [
			{
				visible: "#cookie-notice .cookie-notice-container"
			}
		],
		detectPopup: [
			{
				visible: "#cookie-notice"
			}
		],
		optIn: [
			{
				click: "#cn-accept-cookie"
			}
		],
		optOut: [
			{
				hide: "#cookie-notice"
			}
		]
	},
	{
		name: "cookie-script",
		vendorUrl: "https://cookie-script.com/",
		prehideSelectors: [
			"#cookiescript_injected"
		],
		detectCmp: [
			{
				exists: "#cookiescript_injected"
			}
		],
		detectPopup: [
			{
				visible: "#cookiescript_injected"
			}
		],
		optOut: [
			{
				"if": {
					exists: "#cookiescript_reject"
				},
				then: [
					{
						wait: 100
					},
					{
						click: "#cookiescript_reject"
					}
				],
				"else": [
					{
						click: "#cookiescript_manage"
					},
					{
						waitForVisible: ".cookiescript_fsd_main"
					},
					{
						waitForThenClick: "#cookiescript_reject"
					}
				]
			}
		],
		optIn: [
			{
				click: "#cookiescript_accept"
			}
		]
	},
	{
		name: "cookieacceptbar",
		vendorUrl: "https://unknown",
		cosmetic: true,
		prehideSelectors: [
			"#cookieAcceptBar.cookieAcceptBar"
		],
		detectCmp: [
			{
				exists: "#cookieAcceptBar.cookieAcceptBar"
			}
		],
		detectPopup: [
			{
				visible: "#cookieAcceptBar.cookieAcceptBar"
			}
		],
		optIn: [
			{
				waitForThenClick: "#cookieAcceptBarConfirm"
			}
		],
		optOut: [
			{
				hide: "#cookieAcceptBar.cookieAcceptBar"
			}
		]
	},
	{
		name: "cookiealert",
		intermediate: false,
		prehideSelectors: [
		],
		runContext: {
			frame: true,
			main: true
		},
		detectCmp: [
			{
				exists: ".cookie-alert-extended"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-alert-extended-modal"
			}
		],
		optIn: [
			{
				click: "button[data-controller='cookie-alert/extended/button/accept']"
			},
			{
				"eval": "EVAL_COOKIEALERT_0"
			}
		],
		optOut: [
			{
				click: "a[data-controller='cookie-alert/extended/detail-link']"
			},
			{
				click: ".cookie-alert-configuration-input:checked",
				all: true,
				optional: true
			},
			{
				click: "button[data-controller='cookie-alert/extended/button/configuration']"
			},
			{
				"eval": "EVAL_COOKIEALERT_0"
			}
		],
		test: [
			{
				"eval": "EVAL_COOKIEALERT_2"
			}
		]
	},
	{
		name: "cookieconsent2",
		vendorUrl: "https://www.github.com/orestbida/cookieconsent",
		comment: "supports v2.x.x of the library",
		prehideSelectors: [
			"#cc--main"
		],
		detectCmp: [
			{
				exists: "#cc--main"
			}
		],
		detectPopup: [
			{
				visible: "#cm"
			},
			{
				exists: "#s-all-bn"
			}
		],
		optIn: [
			{
				waitForThenClick: "#s-all-bn"
			}
		],
		optOut: [
			{
				waitForThenClick: "#s-rall-bn"
			}
		],
		test: [
			{
				"eval": "EVAL_COOKIECONSENT2_TEST"
			}
		]
	},
	{
		name: "cookieconsent3",
		vendorUrl: "https://www.github.com/orestbida/cookieconsent",
		comment: "supports v3.x.x of the library",
		prehideSelectors: [
			"#cc-main"
		],
		detectCmp: [
			{
				exists: "#cc-main"
			}
		],
		detectPopup: [
			{
				visible: "#cc-main .cm-wrapper"
			}
		],
		optIn: [
			{
				waitForThenClick: ".cm__btn[data-role=all]"
			}
		],
		optOut: [
			{
				waitForThenClick: ".cm__btn[data-role=necessary]"
			}
		],
		test: [
			{
				"eval": "EVAL_COOKIECONSENT3_TEST"
			}
		]
	},
	{
		name: "cookiecuttr",
		vendorUrl: "https://github.com/cdwharton/cookieCuttr",
		cosmetic: false,
		runContext: {
			main: true,
			frame: false,
			urlPattern: ""
		},
		prehideSelectors: [
			".cc-cookies"
		],
		detectCmp: [
			{
				exists: ".cc-cookies .cc-cookie-accept"
			}
		],
		detectPopup: [
			{
				visible: ".cc-cookies .cc-cookie-accept"
			}
		],
		optIn: [
			{
				waitForThenClick: ".cc-cookies .cc-cookie-accept"
			}
		],
		optOut: [
			{
				"if": {
					exists: ".cc-cookies .cc-cookie-decline"
				},
				then: [
					{
						click: ".cc-cookies .cc-cookie-decline"
					}
				],
				"else": [
					{
						hide: ".cc-cookies"
					}
				]
			}
		]
	},
	{
		name: "cookiefirst.com",
		prehideSelectors: [
			"#cookiefirst-root,.cookiefirst-root,[aria-labelledby=cookie-preference-panel-title]"
		],
		detectCmp: [
			{
				exists: "#cookiefirst-root,.cookiefirst-root"
			}
		],
		detectPopup: [
			{
				visible: "#cookiefirst-root,.cookiefirst-root"
			}
		],
		optIn: [
			{
				click: "button[data-cookiefirst-action=accept]"
			}
		],
		optOut: [
			{
				"if": {
					exists: "button[data-cookiefirst-action=adjust]"
				},
				then: [
					{
						click: "button[data-cookiefirst-action=adjust]"
					},
					{
						waitForVisible: "[data-cookiefirst-widget=modal]",
						timeout: 1000
					},
					{
						"eval": "EVAL_COOKIEFIRST_1"
					},
					{
						wait: 1000
					},
					{
						click: "button[data-cookiefirst-action=save]"
					}
				],
				"else": [
					{
						click: "button[data-cookiefirst-action=reject]"
					}
				]
			}
		],
		test: [
			{
				"eval": "EVAL_COOKIEFIRST_0"
			}
		]
	},
	{
		name: "Cookie Information Banner",
		prehideSelectors: [
			"#cookie-information-template-wrapper"
		],
		detectCmp: [
			{
				exists: "#cookie-information-template-wrapper"
			}
		],
		detectPopup: [
			{
				visible: "#cookie-information-template-wrapper"
			}
		],
		optIn: [
			{
				"eval": "EVAL_COOKIEINFORMATION_1"
			}
		],
		optOut: [
			{
				hide: "#cookie-information-template-wrapper",
				comment: "some templates don't hide the banner automatically"
			},
			{
				"eval": "EVAL_COOKIEINFORMATION_0"
			}
		],
		test: [
			{
				"eval": "EVAL_COOKIEINFORMATION_2"
			}
		]
	},
	{
		name: "cookieyes",
		prehideSelectors: [
			".cky-overlay,.cky-consent-container"
		],
		detectCmp: [
			{
				exists: ".cky-consent-container"
			}
		],
		detectPopup: [
			{
				visible: ".cky-consent-container"
			}
		],
		optIn: [
			{
				waitForThenClick: ".cky-consent-container [data-cky-tag=accept-button]"
			}
		],
		optOut: [
			{
				"if": {
					exists: ".cky-consent-container [data-cky-tag=reject-button]"
				},
				then: [
					{
						waitForThenClick: ".cky-consent-container [data-cky-tag=reject-button]"
					}
				],
				"else": [
					{
						"if": {
							exists: ".cky-consent-container [data-cky-tag=settings-button]"
						},
						then: [
							{
								click: ".cky-consent-container [data-cky-tag=settings-button]"
							},
							{
								waitFor: ".cky-modal-open input[type=checkbox]"
							},
							{
								click: ".cky-modal-open input[type=checkbox]:checked",
								all: true,
								optional: true
							},
							{
								waitForThenClick: ".cky-modal [data-cky-tag=detail-save-button]"
							}
						],
						"else": [
							{
								hide: ".cky-consent-container,.cky-overlay"
							}
						]
					}
				]
			}
		],
		test: [
			{
				"eval": "EVAL_COOKIEYES_0"
			}
		]
	},
	{
		name: "corona-in-zahlen.de",
		prehideSelectors: [
			".cookiealert"
		],
		detectCmp: [
			{
				exists: ".cookiealert"
			}
		],
		detectPopup: [
			{
				visible: ".cookiealert"
			}
		],
		optOut: [
			{
				click: ".configurecookies"
			},
			{
				click: ".confirmcookies"
			}
		],
		optIn: [
			{
				click: ".acceptcookies"
			}
		]
	},
	{
		name: "crossfit-com",
		cosmetic: true,
		prehideSelectors: [
			"body #modal > div > div[class^=\"_wrapper_\"]"
		],
		detectCmp: [
			{
				exists: "body #modal > div > div[class^=\"_wrapper_\"]"
			}
		],
		detectPopup: [
			{
				visible: "body #modal > div > div[class^=\"_wrapper_\"]"
			}
		],
		optIn: [
			{
				click: "button[aria-label=\"accept cookie policy\"]"
			}
		],
		optOut: [
			{
				hide: "body #modal > div > div[class^=\"_wrapper_\"]"
			}
		]
	},
	{
		name: "csu-landtag-de",
		runContext: {
			urlPattern: "^https://(www\\.|)?csu-landtag\\.de"
		},
		prehideSelectors: [
			"#cookie-disclaimer"
		],
		detectCmp: [
			{
				exists: "#cookie-disclaimer"
			}
		],
		detectPopup: [
			{
				visible: "#cookie-disclaimer"
			}
		],
		optIn: [
			{
				click: "#cookieall"
			}
		],
		optOut: [
			{
				click: "#cookiesel"
			}
		]
	},
	{
		name: "dailymotion-us",
		cosmetic: true,
		prehideSelectors: [
			"div[class*=\"CookiePopup__desktopContainer\"]:has(div[class*=\"CookiePopup\"])"
		],
		detectCmp: [
			{
				exists: "div[class*=\"CookiePopup__desktopContainer\"]"
			}
		],
		detectPopup: [
			{
				visible: "div[class*=\"CookiePopup__desktopContainer\"]"
			}
		],
		optIn: [
			{
				click: "div[class*=\"CookiePopup__desktopContainer\"] > button > span"
			}
		],
		optOut: [
			{
				hide: "div[class*=\"CookiePopup__desktopContainer\"]"
			}
		]
	},
	{
		name: "dailymotion.com",
		runContext: {
			urlPattern: "^https://(www\\.)?dailymotion\\.com/"
		},
		prehideSelectors: [
			"div[class*=\"Overlay__container\"]:has(div[class*=\"TCF2Popup\"])"
		],
		detectCmp: [
			{
				exists: "div[class*=\"TCF2Popup\"]"
			}
		],
		detectPopup: [
			{
				visible: "[class*=\"TCF2Popup\"] a[href^=\"https://www.dailymotion.com/legal/cookiemanagement\"]"
			}
		],
		optIn: [
			{
				waitForThenClick: "button[class*=\"TCF2Popup__button\"]:not([class*=\"TCF2Popup__personalize\"])"
			}
		],
		optOut: [
			{
				waitForThenClick: "button[class*=\"TCF2ContinueWithoutAcceptingButton\"]"
			}
		],
		test: [
			{
				"eval": "EVAL_DAILYMOTION_0"
			}
		]
	},
	{
		name: "dan-com",
		vendorUrl: "https://unknown",
		runContext: {
			main: true,
			frame: false
		},
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: ".cookie-banner.show .cookie-banner__content-all-btn"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-banner.show .cookie-banner__content-all-btn"
			}
		],
		optIn: [
			{
				waitForThenClick: ".cookie-banner__content-all-btn"
			}
		],
		optOut: [
			{
				waitForThenClick: ".cookie-banner__content-essential-btn"
			}
		]
	},
	{
		name: "deepl.com",
		prehideSelectors: [
			".dl_cookieBanner_container"
		],
		detectCmp: [
			{
				exists: ".dl_cookieBanner_container"
			}
		],
		detectPopup: [
			{
				visible: ".dl_cookieBanner_container"
			}
		],
		optOut: [
			{
				click: ".dl_cookieBanner--buttonSelected"
			}
		],
		optIn: [
			{
				click: ".dl_cookieBanner--buttonAll"
			}
		]
	},
	{
		name: "delta.com",
		runContext: {
			urlPattern: "^https://www\\.delta\\.com/"
		},
		cosmetic: true,
		prehideSelectors: [
			"ngc-cookie-banner"
		],
		detectCmp: [
			{
				exists: "div.cookie-footer-container"
			}
		],
		detectPopup: [
			{
				visible: "div.cookie-footer-container"
			}
		],
		optIn: [
			{
				click: " button.cookie-close-icon"
			}
		],
		optOut: [
			{
				hide: "div.cookie-footer-container"
			}
		]
	},
	{
		name: "dmgmedia-us",
		prehideSelectors: [
			"#mol-ads-cmp-iframe, div.mol-ads-cmp > form > div"
		],
		detectCmp: [
			{
				exists: "div.mol-ads-cmp > form > div"
			}
		],
		detectPopup: [
			{
				waitForVisible: "div.mol-ads-cmp > form > div"
			}
		],
		optIn: [
			{
				waitForThenClick: "button.mol-ads-cmp--btn-primary"
			}
		],
		optOut: [
			{
				waitForThenClick: "div.mol-ads-ccpa--message > u > a"
			},
			{
				waitForVisible: ".mol-ads-cmp--modal-dialog"
			},
			{
				waitForThenClick: "a.mol-ads-cmp-footer-privacy"
			},
			{
				waitForThenClick: "button.mol-ads-cmp--btn-secondary"
			}
		]
	},
	{
		name: "dmgmedia",
		prehideSelectors: [
			"[data-project=\"mol-fe-cmp\"]"
		],
		detectCmp: [
			{
				exists: "[data-project=\"mol-fe-cmp\"] [class*=footer]"
			}
		],
		detectPopup: [
			{
				visible: "[data-project=\"mol-fe-cmp\"] [class*=footer]"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-project=\"mol-fe-cmp\"] button[class*=primary]"
			}
		],
		optOut: [
			{
				waitForThenClick: "[data-project=\"mol-fe-cmp\"] button[class*=basic]"
			},
			{
				waitForVisible: "[data-project=\"mol-fe-cmp\"] div[class*=\"tabContent\"]"
			},
			{
				waitForThenClick: "[data-project=\"mol-fe-cmp\"] div[class*=\"toggle\"][class*=\"enabled\"]",
				all: true
			},
			{
				waitForThenClick: [
					"[data-project=\"mol-fe-cmp\"] [class*=footer]",
					"xpath///button[contains(., 'Save & Exit')]"
				]
			}
		]
	},
	{
		name: "dndbeyond",
		vendorUrl: "https://www.dndbeyond.com/",
		runContext: {
			urlPattern: "^https://(www\\.)?dndbeyond\\.com/"
		},
		prehideSelectors: [
			"[id^=cookie-consent-banner]"
		],
		detectCmp: [
			{
				exists: "[id^=cookie-consent-banner]"
			}
		],
		detectPopup: [
			{
				visible: "[id^=cookie-consent-banner]"
			}
		],
		optIn: [
			{
				waitForThenClick: "#cookie-consent-granted"
			}
		],
		optOut: [
			{
				waitForThenClick: "#cookie-consent-denied"
			}
		],
		test: [
			{
				"eval": "EVAL_DNDBEYOND_TEST"
			}
		]
	},
	{
		name: "dpgmedia-nl",
		prehideSelectors: [
			"#pg-shadow-host"
		],
		detectCmp: [
			{
				exists: "#pg-shadow-host"
			}
		],
		detectPopup: [
			{
				visible: [
					"#pg-shadow-host",
					"#pg-modal"
				]
			}
		],
		optIn: [
			{
				waitForThenClick: [
					"#pg-shadow-host",
					"#pg-accept-btn"
				]
			}
		],
		optOut: [
			{
				waitForThenClick: [
					"#pg-shadow-host",
					"#pg-configure-btn"
				]
			},
			{
				waitForThenClick: [
					"#pg-shadow-host",
					"#pg-reject-btn"
				]
			}
		]
	},
	{
		name: "Drupal",
		detectCmp: [
			{
				exists: "#drupalorg-crosssite-gdpr"
			}
		],
		detectPopup: [
			{
				visible: "#drupalorg-crosssite-gdpr"
			}
		],
		optOut: [
			{
				click: ".no"
			}
		],
		optIn: [
			{
				click: ".yes"
			}
		]
	},
	{
		name: "WP DSGVO Tools",
		link: "https://wordpress.org/plugins/shapepress-dsgvo/",
		prehideSelectors: [
			".sp-dsgvo"
		],
		cosmetic: true,
		detectCmp: [
			{
				exists: ".sp-dsgvo.sp-dsgvo-popup-overlay"
			}
		],
		detectPopup: [
			{
				visible: ".sp-dsgvo.sp-dsgvo-popup-overlay",
				check: "any"
			}
		],
		optIn: [
			{
				click: ".sp-dsgvo-privacy-btn-accept-all",
				all: true
			}
		],
		optOut: [
			{
				hide: ".sp-dsgvo.sp-dsgvo-popup-overlay"
			}
		],
		test: [
			{
				"eval": "EVAL_DSGVO_0"
			}
		]
	},
	{
		name: "dunelm.com",
		prehideSelectors: [
			"div[data-testid=cookie-consent-modal-backdrop]"
		],
		detectCmp: [
			{
				exists: "div[data-testid=cookie-consent-message-contents]"
			}
		],
		detectPopup: [
			{
				visible: "div[data-testid=cookie-consent-message-contents]"
			}
		],
		optIn: [
			{
				click: "[data-testid=\"cookie-consent-allow-all\"]"
			}
		],
		optOut: [
			{
				click: "button[data-testid=cookie-consent-adjust-settings]"
			},
			{
				click: "button[data-testid=cookie-consent-preferences-save]"
			}
		],
		test: [
			{
				"eval": "EVAL_DUNELM_0"
			}
		]
	},
	{
		name: "ebay",
		vendorUrl: "https://ebay.com",
		cosmetic: false,
		runContext: {
			main: true,
			frame: false,
			urlPattern: "^https://(www\\.)?ebay\\.([.a-z]+)/"
		},
		prehideSelectors: [
			"#gdpr-banner"
		],
		detectCmp: [
			{
				exists: "#gdpr-banner"
			}
		],
		detectPopup: [
			{
				visible: "#gdpr-banner"
			}
		],
		optIn: [
			{
				waitForThenClick: "#gdpr-banner-accept"
			}
		],
		optOut: [
			{
				waitForThenClick: "#gdpr-banner-decline"
			}
		]
	},
	{
		name: "ecosia",
		vendorUrl: "https://www.ecosia.org/",
		runContext: {
			urlPattern: "^https://www\\.ecosia\\.org/"
		},
		prehideSelectors: [
			".cookie-wrapper"
		],
		detectCmp: [
			{
				exists: ".cookie-wrapper > .cookie-notice"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-wrapper > .cookie-notice"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-test-id=cookie-notice-accept]"
			}
		],
		optOut: [
			{
				waitForThenClick: "[data-test-id=cookie-notice-reject]"
			}
		]
	},
	{
		name: "Ensighten ensModal",
		prehideSelectors: [
			".ensModal"
		],
		detectCmp: [
			{
				exists: ".ensModal"
			}
		],
		detectPopup: [
			{
				visible: "#ensModalWrapper[style*=block]"
			}
		],
		optIn: [
			{
				waitForThenClick: "#modalAcceptButton"
			}
		],
		optOut: [
			{
				wait: 500
			},
			{
				visible: "#ensModalWrapper[style*=block]"
			},
			{
				waitForThenClick: ".ensCheckbox:checked",
				all: true
			},
			{
				waitForThenClick: "#ensSave"
			}
		]
	},
	{
		name: "Ensighten ensNotifyBanner",
		prehideSelectors: [
			"#ensNotifyBanner"
		],
		detectCmp: [
			{
				exists: "#ensNotifyBanner"
			}
		],
		detectPopup: [
			{
				visible: "#ensNotifyBanner[style*=block]"
			}
		],
		optIn: [
			{
				waitForThenClick: "#ensCloseBanner"
			}
		],
		optOut: [
			{
				wait: 500
			},
			{
				visible: "#ensNotifyBanner[style*=block]"
			},
			{
				waitForThenClick: "#ensRejectAll,#rejectAll,#ensRejectBanner,.rejectAll,#ensCloseBanner",
				timeout: 2000
			}
		]
	},
	{
		name: "espace-personnel.agirc-arrco.fr",
		runContext: {
			urlPattern: "^https://espace-personnel\\.agirc-arrco\\.fr/"
		},
		prehideSelectors: [
			".cdk-overlay-container"
		],
		detectCmp: [
			{
				exists: ".cdk-overlay-container app-esaa-cookie-component"
			}
		],
		detectPopup: [
			{
				visible: ".cdk-overlay-container app-esaa-cookie-component"
			}
		],
		optIn: [
			{
				waitForThenClick: ".btn-cookie-accepter"
			}
		],
		optOut: [
			{
				waitForThenClick: ".btn-cookie-refuser"
			}
		]
	},
	{
		name: "etsy",
		prehideSelectors: [
			"#gdpr-single-choice-overlay",
			"#gdpr-privacy-settings"
		],
		detectCmp: [
			{
				exists: "#gdpr-single-choice-overlay"
			}
		],
		detectPopup: [
			{
				visible: "#gdpr-single-choice-overlay"
			}
		],
		optOut: [
			{
				click: "button[data-gdpr-open-full-settings]"
			},
			{
				waitForVisible: ".gdpr-overlay-body input",
				timeout: 3000
			},
			{
				wait: 1000
			},
			{
				"eval": "EVAL_ETSY_0"
			},
			{
				"eval": "EVAL_ETSY_1"
			}
		],
		optIn: [
			{
				click: "button[data-gdpr-single-choice-accept]"
			}
		]
	},
	{
		name: "eu-cookie-compliance-banner",
		detectCmp: [
			{
				exists: "body.eu-cookie-compliance-popup-open"
			}
		],
		detectPopup: [
			{
				exists: "body.eu-cookie-compliance-popup-open"
			}
		],
		optIn: [
			{
				click: ".agree-button"
			}
		],
		optOut: [
			{
				"if": {
					visible: ".decline-button,.eu-cookie-compliance-save-preferences-button"
				},
				then: [
					{
						click: ".decline-button,.eu-cookie-compliance-save-preferences-button"
					}
				]
			},
			{
				hide: ".eu-cookie-compliance-banner-info, #sliding-popup"
			}
		],
		test: [
			{
				"eval": "EVAL_EU_COOKIE_COMPLIANCE_0"
			}
		]
	},
	{
		name: "EU Cookie Law",
		prehideSelectors: [
			".pea_cook_wrapper,.pea_cook_more_info_popover"
		],
		cosmetic: true,
		detectCmp: [
			{
				exists: ".pea_cook_wrapper"
			}
		],
		detectPopup: [
			{
				wait: 500
			},
			{
				visible: ".pea_cook_wrapper"
			}
		],
		optIn: [
			{
				click: "#pea_cook_btn"
			}
		],
		optOut: [
			{
				hide: ".pea_cook_wrapper"
			}
		],
		test: [
			{
				"eval": "EVAL_EU_COOKIE_LAW_0"
			}
		]
	},
	{
		name: "europa-eu",
		vendorUrl: "https://ec.europa.eu/",
		runContext: {
			urlPattern: "^https://[^/]*europa\\.eu/"
		},
		prehideSelectors: [
			"#cookie-consent-banner"
		],
		detectCmp: [
			{
				exists: ".cck-container"
			}
		],
		detectPopup: [
			{
				visible: ".cck-container"
			}
		],
		optIn: [
			{
				waitForThenClick: ".cck-actions-button[href=\"#accept\"]"
			}
		],
		optOut: [
			{
				waitForThenClick: ".cck-actions-button[href=\"#refuse\"]",
				hide: ".cck-container"
			}
		]
	},
	{
		name: "EZoic",
		prehideSelectors: [
			"#ez-cookie-dialog-wrapper"
		],
		detectCmp: [
			{
				exists: "#ez-cookie-dialog-wrapper"
			}
		],
		detectPopup: [
			{
				visible: "#ez-cookie-dialog-wrapper"
			}
		],
		optIn: [
			{
				click: "#ez-accept-all",
				optional: true
			},
			{
				"eval": "EVAL_EZOIC_0",
				optional: true
			}
		],
		optOut: [
			{
				wait: 500
			},
			{
				click: "#ez-manage-settings"
			},
			{
				waitFor: "#ez-cookie-dialog input[type=checkbox]"
			},
			{
				click: "#ez-cookie-dialog input[type=checkbox]:checked",
				all: true
			},
			{
				click: "#ez-save-settings"
			}
		],
		test: [
			{
				"eval": "EVAL_EZOIC_1"
			}
		]
	},
	{
		name: "facebook",
		runContext: {
			urlPattern: "^https://([a-z0-9-]+\\.)?facebook\\.com/"
		},
		prehideSelectors: [
			"div[data-testid=\"cookie-policy-manage-dialog\"]"
		],
		detectCmp: [
			{
				exists: "div[data-testid=\"cookie-policy-manage-dialog\"]"
			}
		],
		detectPopup: [
			{
				visible: "div[data-testid=\"cookie-policy-manage-dialog\"]"
			}
		],
		optIn: [
			{
				waitForThenClick: "button[data-cookiebanner=\"accept_button\"]"
			},
			{
				waitForVisible: "div[data-testid=\"cookie-policy-manage-dialog\"]",
				check: "none"
			}
		],
		optOut: [
			{
				waitForThenClick: "button[data-cookiebanner=\"accept_only_essential_button\"]"
			},
			{
				waitForVisible: "div[data-testid=\"cookie-policy-manage-dialog\"]",
				check: "none"
			}
		]
	},
	{
		name: "fides",
		vendorUrl: "https://github.com/ethyca/fides",
		prehideSelectors: [
			"#fides-overlay"
		],
		detectCmp: [
			{
				exists: "#fides-overlay #fides-banner"
			}
		],
		detectPopup: [
			{
				visible: "#fides-overlay #fides-banner"
			},
			{
				"eval": "EVAL_FIDES_DETECT_POPUP"
			}
		],
		optIn: [
			{
				waitForThenClick: "#fides-banner .fides-accept-all-button"
			}
		],
		optOut: [
			{
				waitForThenClick: "#fides-banner .fides-reject-all-button"
			}
		]
	},
	{
		name: "funding-choices",
		prehideSelectors: [
			".fc-consent-root,.fc-dialog-container,.fc-dialog-overlay,.fc-dialog-content"
		],
		detectCmp: [
			{
				exists: ".fc-consent-root"
			}
		],
		detectPopup: [
			{
				exists: ".fc-dialog-container"
			}
		],
		optOut: [
			{
				click: ".fc-cta-do-not-consent,.fc-cta-manage-options"
			},
			{
				click: ".fc-preference-consent:checked,.fc-preference-legitimate-interest:checked",
				all: true,
				optional: true
			},
			{
				click: ".fc-confirm-choices",
				optional: true
			}
		],
		optIn: [
			{
				click: ".fc-cta-consent"
			}
		]
	},
	{
		name: "geeks-for-geeks",
		runContext: {
			urlPattern: "^https://www\\.geeksforgeeks\\.org/"
		},
		cosmetic: true,
		prehideSelectors: [
			".cookie-consent"
		],
		detectCmp: [
			{
				exists: ".cookie-consent"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-consent"
			}
		],
		optIn: [
			{
				click: ".cookie-consent button.consent-btn"
			}
		],
		optOut: [
			{
				hide: ".cookie-consent"
			}
		]
	},
	{
		name: "google-consent-standalone",
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: "a[href^=\"https://policies.google.com/technologies/cookies\""
			},
			{
				exists: "form[action^=\"https://consent.google.\"][action$=\"/save\"]"
			}
		],
		detectPopup: [
			{
				visible: "a[href^=\"https://policies.google.com/technologies/cookies\""
			}
		],
		optIn: [
			{
				waitForThenClick: "form[action^=\"https://consent.google.\"][action$=\"/save\"]:has(input[name=set_eom][value=false]) button"
			}
		],
		optOut: [
			{
				waitForThenClick: "form[action^=\"https://consent.google.\"][action$=\"/save\"]:has(input[name=set_eom][value=true]) button"
			}
		]
	},
	{
		name: "google-cookiebar",
		vendorUrl: "https://www.android.com/better-together/quick-share-app/",
		cosmetic: false,
		prehideSelectors: [
			".glue-cookie-notification-bar"
		],
		detectCmp: [
			{
				exists: ".glue-cookie-notification-bar"
			}
		],
		detectPopup: [
			{
				visible: ".glue-cookie-notification-bar"
			}
		],
		optIn: [
			{
				waitForThenClick: ".glue-cookie-notification-bar__accept"
			}
		],
		optOut: [
			{
				"if": {
					exists: ".glue-cookie-notification-bar__reject"
				},
				then: [
					{
						click: ".glue-cookie-notification-bar__reject"
					}
				],
				"else": [
					{
						hide: ".glue-cookie-notification-bar"
					}
				]
			}
		],
		test: [
		]
	},
	{
		name: "google.com",
		prehideSelectors: [
			".HTjtHe#xe7COe"
		],
		detectCmp: [
			{
				exists: ".HTjtHe#xe7COe"
			},
			{
				exists: ".HTjtHe#xe7COe a[href^=\"https://policies.google.com/technologies/cookies\"]"
			}
		],
		detectPopup: [
			{
				visible: ".HTjtHe#xe7COe button#W0wltc"
			}
		],
		optIn: [
			{
				waitForThenClick: ".HTjtHe#xe7COe button#L2AGLb"
			}
		],
		optOut: [
			{
				waitForThenClick: ".HTjtHe#xe7COe button#W0wltc"
			}
		],
		test: [
			{
				"eval": "EVAL_GOOGLE_0"
			}
		]
	},
	{
		name: "gov.uk",
		detectCmp: [
			{
				exists: "#global-cookie-message"
			}
		],
		detectPopup: [
			{
				exists: "#global-cookie-message"
			}
		],
		optIn: [
			{
				click: "button[data-accept-cookies=true]"
			}
		],
		optOut: [
			{
				click: "button[data-reject-cookies=true],#reject-cookies"
			},
			{
				click: "button[data-hide-cookie-banner=true],#hide-cookie-decision"
			}
		]
	},
	{
		name: "hashicorp",
		vendorUrl: "https://hashicorp.com/",
		runContext: {
			urlPattern: "^https://[^.]*\\.hashicorp\\.com/"
		},
		prehideSelectors: [
			"[data-testid=consent-banner]"
		],
		detectCmp: [
			{
				exists: "[data-testid=consent-banner]"
			}
		],
		detectPopup: [
			{
				visible: "[data-testid=consent-banner]"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-testid=accept]"
			}
		],
		optOut: [
			{
				waitForThenClick: "[data-testid=manage-preferences]"
			},
			{
				waitForThenClick: "[data-testid=consent-mgr-dialog] [data-ga-button=save-preferences]"
			}
		]
	},
	{
		name: "healthline-media",
		prehideSelectors: [
			"#modal-host > div.no-hash > div.window-wrapper"
		],
		detectCmp: [
			{
				exists: "#modal-host > div.no-hash > div.window-wrapper, div[data-testid=qualtrics-container]"
			}
		],
		detectPopup: [
			{
				exists: "#modal-host > div.no-hash > div.window-wrapper, div[data-testid=qualtrics-container]"
			}
		],
		optIn: [
			{
				click: "#modal-host > div.no-hash > div.window-wrapper > div:last-child button"
			}
		],
		optOut: [
			{
				"if": {
					exists: "#modal-host > div.no-hash > div.window-wrapper > div:last-child a[href=\"/privacy-settings\"]"
				},
				then: [
					{
						click: "#modal-host > div.no-hash > div.window-wrapper > div:last-child a[href=\"/privacy-settings\"]"
					}
				],
				"else": [
					{
						waitForVisible: "div#__next"
					},
					{
						click: "#__next div:nth-child(1) > button:first-child"
					}
				]
			}
		]
	},
	{
		name: "hema",
		prehideSelectors: [
			".cookie-modal"
		],
		detectCmp: [
			{
				visible: ".cookie-modal .cookie-accept-btn"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-modal .cookie-accept-btn"
			}
		],
		optIn: [
			{
				waitForThenClick: ".cookie-modal .cookie-accept-btn"
			}
		],
		optOut: [
			{
				waitForThenClick: ".cookie-modal .js-cookie-reject-btn"
			}
		],
		test: [
			{
				"eval": "EVAL_HEMA_TEST_0"
			}
		]
	},
	{
		name: "hetzner.com",
		runContext: {
			urlPattern: "^https://www\\.hetzner\\.com/"
		},
		prehideSelectors: [
			"#CookieConsent"
		],
		detectCmp: [
			{
				exists: "#CookieConsent"
			}
		],
		detectPopup: [
			{
				visible: "#CookieConsent"
			}
		],
		optIn: [
			{
				click: "#CookieConsentGiven"
			}
		],
		optOut: [
			{
				click: "#CookieConsentDeclined"
			}
		]
	},
	{
		name: "hl.co.uk",
		prehideSelectors: [
			".cookieModalContent",
			"#cookie-banner-overlay"
		],
		detectCmp: [
			{
				exists: "#cookie-banner-overlay"
			}
		],
		detectPopup: [
			{
				exists: "#cookie-banner-overlay"
			}
		],
		optIn: [
			{
				click: "#acceptCookieButton"
			}
		],
		optOut: [
			{
				click: "#manageCookie"
			},
			{
				hide: ".cookieSettingsModal"
			},
			{
				waitFor: "#AOCookieToggle"
			},
			{
				click: "#AOCookieToggle[aria-pressed=true]",
				optional: true
			},
			{
				waitFor: "#TPCookieToggle"
			},
			{
				click: "#TPCookieToggle[aria-pressed=true]",
				optional: true
			},
			{
				click: "#updateCookieButton"
			}
		]
	},
	{
		name: "holidaymedia",
		vendorUrl: "https://holidaymedia.nl/",
		prehideSelectors: [
			"dialog[data-cookie-consent]"
		],
		detectCmp: [
			{
				exists: "dialog[data-cookie-consent]"
			}
		],
		detectPopup: [
			{
				visible: "dialog[data-cookie-consent]"
			}
		],
		optIn: [
			{
				waitForThenClick: "button.cookie-consent__button--accept-all"
			}
		],
		optOut: [
			{
				waitForThenClick: "a[data-cookie-accept=\"functional\"]",
				timeout: 2000
			}
		]
	},
	{
		name: "hu-manity",
		vendorUrl: "https://hu-manity.co/",
		prehideSelectors: [
			"#hu.hu-wrapper"
		],
		detectCmp: [
			{
				exists: "#hu.hu-visible"
			}
		],
		detectPopup: [
			{
				visible: "#hu.hu-visible"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-hu-action=cookies-notice-consent-choices-3]"
			},
			{
				waitForThenClick: "#hu-cookies-save"
			}
		],
		optOut: [
			{
				waitForThenClick: "#hu-cookies-save"
			}
		]
	},
	{
		name: "hubspot",
		detectCmp: [
			{
				exists: "#hs-eu-cookie-confirmation"
			}
		],
		detectPopup: [
			{
				visible: "#hs-eu-cookie-confirmation"
			}
		],
		optIn: [
			{
				click: "#hs-eu-confirmation-button"
			}
		],
		optOut: [
			{
				click: "#hs-eu-decline-button"
			}
		]
	},
	{
		name: "indeed.com",
		cosmetic: true,
		prehideSelectors: [
			"#CookiePrivacyNotice"
		],
		detectCmp: [
			{
				exists: "#CookiePrivacyNotice"
			}
		],
		detectPopup: [
			{
				visible: "#CookiePrivacyNotice"
			}
		],
		optIn: [
			{
				click: "#CookiePrivacyNotice button[data-gnav-element-name=CookiePrivacyNoticeOk]"
			}
		],
		optOut: [
			{
				hide: "#CookiePrivacyNotice"
			}
		]
	},
	{
		name: "ing.de",
		runContext: {
			urlPattern: "^https://www\\.ing\\.de/"
		},
		cosmetic: true,
		prehideSelectors: [
			"div[slot=\"backdrop\"]"
		],
		detectCmp: [
			{
				exists: "[data-tag-name=\"ing-cc-dialog-frame\"]"
			}
		],
		detectPopup: [
			{
				visible: "[data-tag-name=\"ing-cc-dialog-frame\"]"
			}
		],
		optIn: [
			{
				click: [
					"[data-tag-name=\"ing-cc-dialog-level0\"]",
					"[data-tag-name=\"ing-cc-button\"][class*=\"accept\"]"
				]
			}
		],
		optOut: [
			{
				click: [
					"[data-tag-name=\"ing-cc-dialog-level0\"]",
					"[data-tag-name=\"ing-cc-button\"][class*=\"more\"]"
				]
			}
		]
	},
	{
		name: "instagram",
		vendorUrl: "https://instagram.com",
		runContext: {
			urlPattern: "^https://www\\.instagram\\.com/"
		},
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: "xpath///span[contains(., \"Vill du tillåta användningen av cookies från Instagram i den här webbläsaren?\") or contains(., \"Allow the use of cookies from Instagram on this browser?\") or contains(., \"Povolit v prohlížeči použití souborů cookie z Instagramu?\") or contains(., \"Dopustiti upotrebu kolačića s Instagrama na ovom pregledniku?\") or contains(., \"Разрешить использование файлов cookie от Instagram в этом браузере?\") or contains(., \"Vuoi consentire l'uso dei cookie di Instagram su questo browser?\") or contains(., \"Povoliť používanie cookies zo služby Instagram v tomto prehliadači?\") or contains(., \"Die Verwendung von Cookies durch Instagram in diesem Browser erlauben?\") or contains(., \"Sallitaanko Instagramin evästeiden käyttö tällä selaimella?\") or contains(., \"Engedélyezed az Instagram cookie-jainak használatát ebben a böngészőben?\") or contains(., \"Het gebruik van cookies van Instagram toestaan in deze browser?\") or contains(., \"Bu tarayıcıda Instagram'dan çerez kullanımına izin verilsin mi?\") or contains(., \"Permitir o uso de cookies do Instagram neste navegador?\") or contains(., \"Permiţi folosirea modulelor cookie de la Instagram în acest browser?\") or contains(., \"Autoriser l’utilisation des cookies d’Instagram sur ce navigateur ?\") or contains(., \"¿Permitir el uso de cookies de Instagram en este navegador?\") or contains(., \"Zezwolić na użycie plików cookie z Instagramu w tej przeglądarce?\") or contains(., \"Να επιτρέπεται η χρήση cookies από τo Instagram σε αυτό το πρόγραμμα περιήγησης;\") or contains(., \"Разрешавате ли използването на бисквитки от Instagram на този браузър?\") or contains(., \"Vil du tillade brugen af cookies fra Instagram i denne browser?\") or contains(., \"Vil du tillate bruk av informasjonskapsler fra Instagram i denne nettleseren?\")]"
			}
		],
		detectPopup: [
			{
				visible: "xpath///span[contains(., \"Vill du tillåta användningen av cookies från Instagram i den här webbläsaren?\") or contains(., \"Allow the use of cookies from Instagram on this browser?\") or contains(., \"Povolit v prohlížeči použití souborů cookie z Instagramu?\") or contains(., \"Dopustiti upotrebu kolačića s Instagrama na ovom pregledniku?\") or contains(., \"Разрешить использование файлов cookie от Instagram в этом браузере?\") or contains(., \"Vuoi consentire l'uso dei cookie di Instagram su questo browser?\") or contains(., \"Povoliť používanie cookies zo služby Instagram v tomto prehliadači?\") or contains(., \"Die Verwendung von Cookies durch Instagram in diesem Browser erlauben?\") or contains(., \"Sallitaanko Instagramin evästeiden käyttö tällä selaimella?\") or contains(., \"Engedélyezed az Instagram cookie-jainak használatát ebben a böngészőben?\") or contains(., \"Het gebruik van cookies van Instagram toestaan in deze browser?\") or contains(., \"Bu tarayıcıda Instagram'dan çerez kullanımına izin verilsin mi?\") or contains(., \"Permitir o uso de cookies do Instagram neste navegador?\") or contains(., \"Permiţi folosirea modulelor cookie de la Instagram în acest browser?\") or contains(., \"Autoriser l’utilisation des cookies d’Instagram sur ce navigateur ?\") or contains(., \"¿Permitir el uso de cookies de Instagram en este navegador?\") or contains(., \"Zezwolić na użycie plików cookie z Instagramu w tej przeglądarce?\") or contains(., \"Να επιτρέπεται η χρήση cookies από τo Instagram σε αυτό το πρόγραμμα περιήγησης;\") or contains(., \"Разрешавате ли използването на бисквитки от Instagram на този браузър?\") or contains(., \"Vil du tillade brugen af cookies fra Instagram i denne browser?\") or contains(., \"Vil du tillate bruk av informasjonskapsler fra Instagram i denne nettleseren?\")]"
			}
		],
		optIn: [
			{
				waitForThenClick: "xpath///button[contains(., 'Tillad alle cookies') or contains(., 'Alle Cookies erlauben') or contains(., 'Allow all cookies') or contains(., 'Разрешаване на всички бисквитки') or contains(., 'Tillåt alla cookies') or contains(., 'Povolit všechny soubory cookie') or contains(., 'Tüm çerezlere izin ver') or contains(., 'Permite toate modulele cookie') or contains(., 'Να επιτρέπονται όλα τα cookies') or contains(., 'Tillat alle informasjonskapsler') or contains(., 'Povoliť všetky cookies') or contains(., 'Permitir todas las cookies') or contains(., 'Permitir todos os cookies') or contains(., 'Alle cookies toestaan') or contains(., 'Salli kaikki evästeet') or contains(., 'Consenti tutti i cookie') or contains(., 'Az összes cookie engedélyezése') or contains(., 'Autoriser tous les cookies') or contains(., 'Zezwól na wszystkie pliki cookie') or contains(., 'Разрешить все cookie') or contains(., 'Dopusti sve kolačiće')]"
			}
		],
		optOut: [
			{
				waitForThenClick: "xpath///button[contains(., 'Отклонить необязательные файлы cookie') or contains(., 'Decline optional cookies') or contains(., 'Refuser les cookies optionnels') or contains(., 'Hylkää valinnaiset evästeet') or contains(., 'Afvis valgfrie cookies') or contains(., 'Odmietnuť nepovinné cookies') or contains(., 'Απόρριψη προαιρετικών cookies') or contains(., 'Neka valfria cookies') or contains(., 'Optionale Cookies ablehnen') or contains(., 'Rifiuta cookie facoltativi') or contains(., 'Odbij neobavezne kolačiće') or contains(., 'Avvis valgfrie informasjonskapsler') or contains(., 'İsteğe bağlı çerezleri reddet') or contains(., 'Recusar cookies opcionais') or contains(., 'Optionele cookies afwijzen') or contains(., 'Rechazar cookies opcionales') or contains(., 'Odrzuć opcjonalne pliki cookie') or contains(., 'Отхвърляне на бисквитките по избор') or contains(., 'Odmítnout volitelné soubory cookie') or contains(., 'Refuză modulele cookie opţionale') or contains(., 'A nem kötelező cookie-k elutasítása')]"
			},
			{
				wait: 2000
			}
		]
	},
	{
		name: "ionos.de",
		prehideSelectors: [
			".privacy-consent--backdrop",
			".privacy-consent--modal"
		],
		detectCmp: [
			{
				exists: ".privacy-consent--modal"
			}
		],
		detectPopup: [
			{
				visible: ".privacy-consent--modal"
			}
		],
		optIn: [
			{
				click: "#selectAll"
			}
		],
		optOut: [
			{
				click: ".footer-config-link"
			},
			{
				click: "#confirmSelection"
			}
		]
	},
	{
		name: "itopvpn.com",
		cosmetic: true,
		prehideSelectors: [
			".pop-cookie"
		],
		detectCmp: [
			{
				exists: ".pop-cookie"
			}
		],
		detectPopup: [
			{
				exists: ".pop-cookie"
			}
		],
		optIn: [
			{
				click: "#_pcookie"
			}
		],
		optOut: [
			{
				hide: ".pop-cookie"
			}
		]
	},
	{
		name: "iubenda",
		prehideSelectors: [
			"#iubenda-cs-banner"
		],
		detectCmp: [
			{
				exists: "#iubenda-cs-banner"
			}
		],
		detectPopup: [
			{
				visible: ".iubenda-cs-accept-btn"
			}
		],
		optIn: [
			{
				waitForThenClick: ".iubenda-cs-accept-btn"
			}
		],
		optOut: [
			{
				waitForThenClick: ".iubenda-cs-customize-btn"
			},
			{
				"eval": "EVAL_IUBENDA_0"
			},
			{
				waitForThenClick: "#iubFooterBtn"
			}
		],
		test: [
			{
				"eval": "EVAL_IUBENDA_1"
			}
		]
	},
	{
		name: "iWink",
		prehideSelectors: [
			"body.cookies-request #cookie-bar"
		],
		detectCmp: [
			{
				exists: "body.cookies-request #cookie-bar"
			}
		],
		detectPopup: [
			{
				visible: "body.cookies-request #cookie-bar"
			}
		],
		optIn: [
			{
				waitForThenClick: "body.cookies-request #cookie-bar .allow-cookies"
			}
		],
		optOut: [
			{
				waitForThenClick: "body.cookies-request #cookie-bar .disallow-cookies"
			}
		],
		test: [
			{
				"eval": "EVAL_IWINK_TEST"
			}
		]
	},
	{
		name: "jdsports",
		vendorUrl: "https://www.jdsports.co.uk/",
		runContext: {
			urlPattern: "^https://(www|m)\\.jdsports\\."
		},
		prehideSelectors: [
			".miniConsent,#PrivacyPolicyBanner"
		],
		detectCmp: [
			{
				exists: ".miniConsent,#PrivacyPolicyBanner"
			}
		],
		detectPopup: [
			{
				visible: ".miniConsent,#PrivacyPolicyBanner"
			}
		],
		optIn: [
			{
				waitForThenClick: ".miniConsent .accept-all-cookies"
			}
		],
		optOut: [
			{
				"if": {
					exists: "#PrivacyPolicyBanner"
				},
				then: [
					{
						hide: "#PrivacyPolicyBanner"
					}
				],
				"else": [
					{
						waitForThenClick: "#cookie-settings"
					},
					{
						waitForThenClick: "#reject-all-cookies"
					}
				]
			}
		]
	},
	{
		name: "johnlewis.com",
		prehideSelectors: [
			"div[class^=pecr-cookie-banner-]"
		],
		detectCmp: [
			{
				exists: "div[class^=pecr-cookie-banner-]"
			}
		],
		detectPopup: [
			{
				exists: "div[class^=pecr-cookie-banner-]"
			}
		],
		optOut: [
			{
				click: "button[data-test^=manage-cookies]"
			},
			{
				wait: "500"
			},
			{
				click: "label[data-test^=toggle][class*=checked]:not([class*=disabled])",
				all: true,
				optional: true
			},
			{
				click: "button[data-test=save-preferences]"
			}
		],
		optIn: [
			{
				click: "button[data-test=allow-all]"
			}
		]
	},
	{
		name: "jquery.cookieBar",
		vendorUrl: "https://github.com/kovarp/jquery.cookieBar",
		prehideSelectors: [
			".cookie-bar"
		],
		cosmetic: true,
		detectCmp: [
			{
				exists: ".cookie-bar .cookie-bar__message,.cookie-bar .cookie-bar__buttons"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-bar .cookie-bar__message,.cookie-bar .cookie-bar__buttons",
				check: "any"
			}
		],
		optIn: [
			{
				click: ".cookie-bar .cookie-bar__btn"
			}
		],
		optOut: [
			{
				hide: ".cookie-bar"
			}
		],
		test: [
			{
				visible: ".cookie-bar .cookie-bar__message,.cookie-bar .cookie-bar__buttons",
				check: "none"
			},
			{
				"eval": "EVAL_JQUERY_COOKIEBAR_0"
			}
		]
	},
	{
		name: "justwatch.com",
		prehideSelectors: [
			".consent-banner"
		],
		detectCmp: [
			{
				exists: ".consent-banner .consent-banner__actions"
			}
		],
		detectPopup: [
			{
				visible: ".consent-banner .consent-banner__actions"
			}
		],
		optIn: [
			{
				click: ".consent-banner__actions button.basic-button.primary"
			}
		],
		optOut: [
			{
				click: ".consent-banner__actions button.basic-button.secondary"
			},
			{
				waitForThenClick: ".consent-modal__footer button.basic-button.secondary"
			},
			{
				waitForThenClick: ".consent-modal ion-content > div > a:nth-child(9)"
			},
			{
				click: "label.consent-switch input[type=checkbox]:checked",
				all: true,
				optional: true
			},
			{
				waitForVisible: ".consent-modal__footer button.basic-button.primary"
			},
			{
				click: ".consent-modal__footer button.basic-button.primary"
			}
		]
	},
	{
		name: "ketch",
		vendorUrl: "https://www.ketch.com",
		runContext: {
			frame: false,
			main: true
		},
		intermediate: false,
		prehideSelectors: [
			"#lanyard_root div[role='dialog']"
		],
		detectCmp: [
			{
				exists: "#lanyard_root div[role='dialog']"
			}
		],
		detectPopup: [
			{
				visible: "#lanyard_root div[role='dialog']"
			}
		],
		optIn: [
			{
				"if": {
					exists: "#lanyard_root button[class='confirmButton']"
				},
				then: [
					{
						waitForThenClick: "#lanyard_root div[class*=buttons] > :nth-child(2)"
					},
					{
						click: "#lanyard_root button[class='confirmButton']"
					}
				],
				"else": [
					{
						waitForThenClick: "#lanyard_root div[class*=buttons] > :nth-child(2)"
					}
				]
			}
		],
		optOut: [
			{
				"if": {
					exists: "#lanyard_root [aria-describedby=banner-description]"
				},
				then: [
					{
						waitForThenClick: "#lanyard_root div[class*=buttons] > button[class*=secondaryButton], #lanyard_root button[class*=buttons-secondary]",
						comment: "can be either settings or reject button"
					}
				]
			},
			{
				waitFor: "#lanyard_root [aria-describedby=preference-description],#lanyard_root [aria-describedby=modal-description], #ketch-preferences",
				timeout: 1000,
				optional: true
			},
			{
				"if": {
					exists: "#lanyard_root [aria-describedby=preference-description],#lanyard_root [aria-describedby=modal-description], #ketch-preferences"
				},
				then: [
					{
						waitForThenClick: "#lanyard_root button[class*=rejectButton], #lanyard_root button[class*=rejectAllButton]"
					},
					{
						click: "#lanyard_root button[class*=confirmButton],#lanyard_root div[class*=actions_] > button:nth-child(1), #lanyard_root button[class*=actionButton]"
					}
				]
			}
		],
		test: [
			{
				"eval": "EVAL_KETCH_TEST"
			}
		]
	},
	{
		name: "kleinanzeigen-de",
		runContext: {
			urlPattern: "^https?://(www\\.)?kleinanzeigen\\.de"
		},
		prehideSelectors: [
			"#gdpr-banner-container"
		],
		detectCmp: [
			{
				any: [
					{
						exists: "#gdpr-banner-container #gdpr-banner [data-testid=gdpr-banner-cmp-button]"
					},
					{
						exists: "#ConsentManagementPage"
					}
				]
			}
		],
		detectPopup: [
			{
				any: [
					{
						visible: "#gdpr-banner-container #gdpr-banner [data-testid=gdpr-banner-cmp-button]"
					},
					{
						visible: "#ConsentManagementPage"
					}
				]
			}
		],
		optIn: [
			{
				"if": {
					exists: "#gdpr-banner-container #gdpr-banner"
				},
				then: [
					{
						click: "#gdpr-banner-container #gdpr-banner [data-testid=gdpr-banner-accept]"
					}
				],
				"else": [
					{
						click: "#ConsentManagementPage .Button-primary"
					}
				]
			}
		],
		optOut: [
			{
				"if": {
					exists: "#gdpr-banner-container #gdpr-banner"
				},
				then: [
					{
						click: "#gdpr-banner-container #gdpr-banner [data-testid=gdpr-banner-cmp-button]"
					}
				],
				"else": [
					{
						click: "#ConsentManagementPage .Button-secondary"
					}
				]
			}
		]
	},
	{
		name: "lightbox",
		prehideSelectors: [
			".darken-layer.open,.lightbox.lightbox--cookie-consent"
		],
		detectCmp: [
			{
				exists: "body.cookie-consent-is-active div.lightbox--cookie-consent > div.lightbox__content > div.cookie-consent[data-jsb]"
			}
		],
		detectPopup: [
			{
				visible: "body.cookie-consent-is-active div.lightbox--cookie-consent > div.lightbox__content > div.cookie-consent[data-jsb]"
			}
		],
		optOut: [
			{
				click: ".cookie-consent__footer > button[type='submit']:not([data-button='selectAll'])"
			}
		],
		optIn: [
			{
				click: ".cookie-consent__footer > button[type='submit'][data-button='selectAll']"
			}
		]
	},
	{
		name: "lineagrafica",
		vendorUrl: "https://addons.prestashop.com/en/legal/8734-eu-cookie-law-gdpr-banner-blocker.html",
		cosmetic: true,
		prehideSelectors: [
			"#lgcookieslaw_banner,#lgcookieslaw_modal,.lgcookieslaw-overlay"
		],
		detectCmp: [
			{
				exists: "#lgcookieslaw_banner,#lgcookieslaw_modal,.lgcookieslaw-overlay"
			}
		],
		detectPopup: [
			{
				exists: "#lgcookieslaw_banner,#lgcookieslaw_modal,.lgcookieslaw-overlay"
			}
		],
		optIn: [
			{
				waitForThenClick: "#lgcookieslaw_accept"
			}
		],
		optOut: [
			{
				hide: "#lgcookieslaw_banner,#lgcookieslaw_modal,.lgcookieslaw-overlay"
			}
		]
	},
	{
		name: "linkedin.com",
		prehideSelectors: [
			".artdeco-global-alert[type=COOKIE_CONSENT]"
		],
		detectCmp: [
			{
				exists: ".artdeco-global-alert[type=COOKIE_CONSENT]"
			}
		],
		detectPopup: [
			{
				visible: ".artdeco-global-alert[type=COOKIE_CONSENT]"
			}
		],
		optIn: [
			{
				waitForVisible: ".artdeco-global-alert[type=COOKIE_CONSENT] button[action-type=ACCEPT]"
			},
			{
				wait: 500
			},
			{
				waitForThenClick: ".artdeco-global-alert[type=COOKIE_CONSENT] button[action-type=ACCEPT]"
			}
		],
		optOut: [
			{
				waitForVisible: ".artdeco-global-alert[type=COOKIE_CONSENT] button[action-type=DENY]"
			},
			{
				wait: 500
			},
			{
				waitForThenClick: ".artdeco-global-alert[type=COOKIE_CONSENT] button[action-type=DENY]"
			}
		],
		test: [
			{
				waitForVisible: ".artdeco-global-alert[type=COOKIE_CONSENT]",
				check: "none"
			}
		]
	},
	{
		name: "livejasmin",
		vendorUrl: "https://www.livejasmin.com/",
		runContext: {
			urlPattern: "^https://(m|www)\\.livejasmin\\.com/"
		},
		prehideSelectors: [
			"#consent_modal"
		],
		detectCmp: [
			{
				exists: "#consent_modal"
			}
		],
		detectPopup: [
			{
				visible: "#consent_modal"
			}
		],
		optIn: [
			{
				waitForThenClick: "#consent_modal button[data-testid=ButtonStyledButton]:first-of-type"
			}
		],
		optOut: [
			{
				waitForThenClick: "#consent_modal button[data-testid=ButtonStyledButton]:nth-of-type(2)"
			},
			{
				waitForVisible: "[data-testid=PrivacyPreferenceCenterWithConsentCookieContent]"
			},
			{
				click: "[data-testid=PrivacyPreferenceCenterWithConsentCookieContent] input[data-testid=PrivacyPreferenceCenterWithConsentCookieSwitch]:checked",
				optional: true,
				all: true
			},
			{
				waitForThenClick: "[data-testid=PrivacyPreferenceCenterWithConsentCookieContent] button[data-testid=ButtonStyledButton]:last-child"
			}
		]
	},
	{
		name: "macpaw.com",
		cosmetic: true,
		prehideSelectors: [
			"div[data-banner=\"cookies\"]"
		],
		detectCmp: [
			{
				exists: "div[data-banner=\"cookies\"]"
			}
		],
		detectPopup: [
			{
				exists: "div[data-banner=\"cookies\"]"
			}
		],
		optIn: [
			{
				click: "button[data-banner-close=\"cookies\"]"
			}
		],
		optOut: [
			{
				hide: "div[data-banner=\"cookies\"]"
			}
		]
	},
	{
		name: "marksandspencer.com",
		cosmetic: true,
		detectCmp: [
			{
				exists: ".navigation-cookiebbanner"
			}
		],
		detectPopup: [
			{
				visible: ".navigation-cookiebbanner"
			}
		],
		optOut: [
			{
				hide: ".navigation-cookiebbanner"
			}
		],
		optIn: [
			{
				click: ".navigation-cookiebbanner__submit"
			}
		]
	},
	{
		name: "mediamarkt.de",
		prehideSelectors: [
			"div[aria-labelledby=pwa-consent-layer-title]",
			"div[class^=StyledConsentLayerWrapper-]"
		],
		detectCmp: [
			{
				exists: "div[aria-labelledby^=pwa-consent-layer-title]"
			}
		],
		detectPopup: [
			{
				exists: "div[aria-labelledby^=pwa-consent-layer-title]"
			}
		],
		optOut: [
			{
				click: "button[data-test^=pwa-consent-layer-deny-all]"
			}
		],
		optIn: [
			{
				click: "button[data-test^=pwa-consent-layer-accept-all"
			}
		]
	},
	{
		name: "Mediavine",
		prehideSelectors: [
			"[data-name=\"mediavine-gdpr-cmp\"]"
		],
		detectCmp: [
			{
				exists: "[data-name=\"mediavine-gdpr-cmp\"]"
			}
		],
		detectPopup: [
			{
				wait: 500
			},
			{
				visible: "[data-name=\"mediavine-gdpr-cmp\"]"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-name=\"mediavine-gdpr-cmp\"] [format=\"primary\"]"
			}
		],
		optOut: [
			{
				waitForThenClick: "[data-name=\"mediavine-gdpr-cmp\"] [data-view=\"manageSettings\"]"
			},
			{
				waitFor: "[data-name=\"mediavine-gdpr-cmp\"] input[type=checkbox]"
			},
			{
				"eval": "EVAL_MEDIAVINE_0",
				optional: true
			},
			{
				click: "[data-name=\"mediavine-gdpr-cmp\"] [format=\"secondary\"]"
			}
		]
	},
	{
		name: "medium",
		vendorUrl: "https://medium.com",
		cosmetic: true,
		runContext: {
			main: true,
			frame: false,
			urlPattern: "^https://([a-z0-9-]+\\.)?medium\\.com/"
		},
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: "div:has(> div > div > div[role=alert] > a[href^=\"https://policy.medium.com/medium-privacy-policy-\"])"
			}
		],
		detectPopup: [
			{
				visible: "div:has(> div > div > div[role=alert] > a[href^=\"https://policy.medium.com/medium-privacy-policy-\"])"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-testid=close-button]"
			}
		],
		optOut: [
			{
				hide: "div:has(> div > div > div[role=alert] > a[href^=\"https://policy.medium.com/medium-privacy-policy-\"])"
			}
		]
	},
	{
		name: "microsoft.com",
		prehideSelectors: [
			"#wcpConsentBannerCtrl"
		],
		detectCmp: [
			{
				exists: "#wcpConsentBannerCtrl"
			}
		],
		detectPopup: [
			{
				exists: "#wcpConsentBannerCtrl"
			}
		],
		optOut: [
			{
				"eval": "EVAL_MICROSOFT_0"
			}
		],
		optIn: [
			{
				"eval": "EVAL_MICROSOFT_1"
			}
		],
		test: [
			{
				"eval": "EVAL_MICROSOFT_2"
			}
		]
	},
	{
		name: "midway-usa",
		runContext: {
			urlPattern: "^https://www\\.midwayusa\\.com/"
		},
		cosmetic: true,
		prehideSelectors: [
			"#cookie-container"
		],
		detectCmp: [
			{
				exists: [
					"div[aria-label=\"Cookie Policy Banner\"]"
				]
			}
		],
		detectPopup: [
			{
				visible: "#cookie-container"
			}
		],
		optIn: [
			{
				click: "button#cookie-btn"
			}
		],
		optOut: [
			{
				hide: "div[aria-label=\"Cookie Policy Banner\"]"
			}
		]
	},
	{
		name: "moneysavingexpert.com",
		detectCmp: [
			{
				exists: "dialog[data-testid=accept-our-cookies-dialog]"
			}
		],
		detectPopup: [
			{
				visible: "dialog[data-testid=accept-our-cookies-dialog]"
			}
		],
		optIn: [
			{
				click: "#banner-accept"
			}
		],
		optOut: [
			{
				click: "#banner-manage"
			},
			{
				click: "#pc-confirm"
			}
		]
	},
	{
		name: "monzo.com",
		prehideSelectors: [
			".cookie-alert, cookie-alert__content"
		],
		detectCmp: [
			{
				exists: "div.cookie-alert[role=\"dialog\"]"
			},
			{
				exists: "a[href*=\"monzo\"]"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-alert__content"
			}
		],
		optIn: [
			{
				click: ".js-accept-cookie-policy"
			}
		],
		optOut: [
			{
				click: ".js-decline-cookie-policy"
			}
		]
	},
	{
		name: "Moove",
		prehideSelectors: [
			"#moove_gdpr_cookie_info_bar"
		],
		detectCmp: [
			{
				exists: "#moove_gdpr_cookie_info_bar"
			}
		],
		detectPopup: [
			{
				visible: "#moove_gdpr_cookie_info_bar:not(.moove-gdpr-info-bar-hidden)"
			}
		],
		optIn: [
			{
				waitForThenClick: ".moove-gdpr-infobar-allow-all"
			}
		],
		optOut: [
			{
				"if": {
					exists: "#moove_gdpr_cookie_info_bar .change-settings-button"
				},
				then: [
					{
						click: "#moove_gdpr_cookie_info_bar .change-settings-button"
					},
					{
						waitForVisible: "#moove_gdpr_cookie_modal"
					},
					{
						"eval": "EVAL_MOOVE_0"
					},
					{
						click: ".moove-gdpr-modal-save-settings"
					}
				],
				"else": [
					{
						hide: "#moove_gdpr_cookie_info_bar"
					}
				]
			}
		],
		test: [
			{
				visible: "#moove_gdpr_cookie_info_bar",
				check: "none"
			}
		]
	},
	{
		name: "national-lottery.co.uk",
		detectCmp: [
			{
				exists: ".cuk_cookie_consent"
			}
		],
		detectPopup: [
			{
				visible: ".cuk_cookie_consent",
				check: "any"
			}
		],
		optOut: [
			{
				click: ".cuk_cookie_consent_manage_pref"
			},
			{
				click: ".cuk_cookie_consent_save_pref"
			},
			{
				click: ".cuk_cookie_consent_close"
			}
		],
		optIn: [
			{
				click: ".cuk_cookie_consent_accept_all"
			}
		]
	},
	{
		name: "nba.com",
		runContext: {
			urlPattern: "^https://(www\\.)?nba.com/"
		},
		cosmetic: true,
		prehideSelectors: [
			"#onetrust-banner-sdk"
		],
		detectCmp: [
			{
				exists: "#onetrust-banner-sdk"
			}
		],
		detectPopup: [
			{
				visible: "#onetrust-banner-sdk"
			}
		],
		optIn: [
			{
				click: "#onetrust-accept-btn-handler"
			}
		],
		optOut: [
			{
				hide: "#onetrust-banner-sdk"
			}
		]
	},
	{
		name: "netbeat.de",
		runContext: {
			urlPattern: "^https://(www\\.)?netbeat\\.de/"
		},
		prehideSelectors: [
			"div#cookieWarning"
		],
		detectCmp: [
			{
				exists: "div#cookieWarning"
			}
		],
		detectPopup: [
			{
				visible: "div#cookieWarning"
			}
		],
		optIn: [
			{
				waitForThenClick: "a#btnCookiesAcceptAll"
			}
		],
		optOut: [
			{
				waitForThenClick: "a#btnCookiesDenyAll"
			}
		]
	},
	{
		name: "netflix.de",
		detectCmp: [
			{
				exists: "#cookie-disclosure"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-disclosure-message",
				check: "any"
			}
		],
		optIn: [
			{
				click: ".btn-accept"
			}
		],
		optOut: [
			{
				hide: "#cookie-disclosure"
			},
			{
				click: ".btn-reject"
			}
		]
	},
	{
		name: "nhs.uk",
		prehideSelectors: [
			"#nhsuk-cookie-banner"
		],
		detectCmp: [
			{
				exists: "#nhsuk-cookie-banner"
			}
		],
		detectPopup: [
			{
				exists: "#nhsuk-cookie-banner"
			}
		],
		optOut: [
			{
				click: "#nhsuk-cookie-banner__link_accept"
			}
		],
		optIn: [
			{
				click: "#nhsuk-cookie-banner__link_accept_analytics"
			}
		]
	},
	{
		name: "nike",
		vendorUrl: "https://nike.com",
		runContext: {
			urlPattern: "^https://(www\\.)?nike\\.com/"
		},
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: "[data-testid=cookie-dialog-root]"
			}
		],
		detectPopup: [
			{
				visible: "[data-testid=cookie-dialog-root]"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-testid=dialog-accept-button]"
			}
		],
		optOut: [
			{
				waitForThenClick: "input[type=radio][id$=-declineLabel]",
				all: true
			},
			{
				waitForThenClick: "[data-testid=confirm-choice-button]"
			}
		]
	},
	{
		name: "notice-cookie",
		prehideSelectors: [
			".button--notice"
		],
		cosmetic: true,
		detectCmp: [
			{
				exists: ".notice--cookie"
			}
		],
		detectPopup: [
			{
				visible: ".notice--cookie"
			}
		],
		optIn: [
			{
				click: ".button--notice"
			}
		],
		optOut: [
			{
				hide: ".notice--cookie"
			}
		]
	},
	{
		name: "nrk.no",
		cosmetic: true,
		prehideSelectors: [
			".nrk-masthead__info-banner--cookie"
		],
		detectCmp: [
			{
				exists: ".nrk-masthead__info-banner--cookie"
			}
		],
		detectPopup: [
			{
				exists: ".nrk-masthead__info-banner--cookie"
			}
		],
		optIn: [
			{
				click: "div.nrk-masthead__info-banner--cookie button > span:has(+ svg.nrk-close)"
			}
		],
		optOut: [
			{
				hide: ".nrk-masthead__info-banner--cookie"
			}
		]
	},
	{
		name: "obi.de",
		prehideSelectors: [
			".disc-cp--active"
		],
		detectCmp: [
			{
				exists: ".disc-cp-modal__modal"
			}
		],
		detectPopup: [
			{
				visible: ".disc-cp-modal__modal"
			}
		],
		optIn: [
			{
				click: ".js-disc-cp-accept-all"
			}
		],
		optOut: [
			{
				click: ".js-disc-cp-deny-all"
			}
		]
	},
	{
		name: "om",
		vendorUrl: "https://olli-machts.de/en/extension/cookie-manager",
		prehideSelectors: [
			".tx-om-cookie-consent"
		],
		detectCmp: [
			{
				exists: ".tx-om-cookie-consent .active[data-omcookie-panel]"
			}
		],
		detectPopup: [
			{
				exists: ".tx-om-cookie-consent .active[data-omcookie-panel]"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-omcookie-panel-save=all]"
			}
		],
		optOut: [
			{
				"if": {
					exists: "[data-omcookie-panel-save=min]"
				},
				then: [
					{
						waitForThenClick: "[data-omcookie-panel-save=min]"
					}
				],
				"else": [
					{
						click: "input[data-omcookie-panel-grp]:checked:not(:disabled)",
						all: true,
						optional: true
					},
					{
						waitForThenClick: "[data-omcookie-panel-save=save]"
					}
				]
			}
		]
	},
	{
		name: "onlyFans.com",
		runContext: {
			urlPattern: "^https://onlyfans\\.com/"
		},
		prehideSelectors: [
			"div.b-cookies-informer"
		],
		detectCmp: [
			{
				exists: "div.b-cookies-informer"
			}
		],
		detectPopup: [
			{
				exists: "div.b-cookies-informer"
			}
		],
		optIn: [
			{
				click: "div.b-cookies-informer__nav > button:nth-child(2)"
			}
		],
		optOut: [
			{
				click: "div.b-cookies-informer__nav > button:nth-child(1)"
			},
			{
				"if": {
					exists: "div.b-cookies-informer__switchers"
				},
				then: [
					{
						click: "div.b-cookies-informer__switchers input:not([disabled])",
						all: true
					},
					{
						click: "div.b-cookies-informer__nav > button"
					}
				]
			}
		]
	},
	{
		name: "openai",
		vendorUrl: "https://platform.openai.com/",
		cosmetic: false,
		runContext: {
			urlPattern: "^https://([a-z0-9-]+\\.)?openai\\.com/"
		},
		prehideSelectors: [
			"[data-testid=cookie-consent-banner]"
		],
		detectCmp: [
			{
				exists: "[data-testid=cookie-consent-banner]"
			}
		],
		detectPopup: [
			{
				visible: "[data-testid=cookie-consent-banner]"
			}
		],
		optIn: [
			{
				waitForThenClick: "xpath///button[contains(., 'Accept all')]"
			}
		],
		optOut: [
			{
				waitForThenClick: "xpath///button[contains(., 'Reject all')]"
			}
		],
		test: [
			{
				wait: 500
			},
			{
				"eval": "EVAL_OPENAI_TEST"
			}
		]
	},
	{
		name: "openli",
		vendorUrl: "https://openli.com",
		prehideSelectors: [
			".legalmonster-cleanslate"
		],
		detectCmp: [
			{
				exists: ".legalmonster-cleanslate"
			}
		],
		detectPopup: [
			{
				visible: ".legalmonster-cleanslate #lm-cookie-wall-container",
				check: "any"
			}
		],
		optIn: [
			{
				waitForThenClick: "#lm-accept-all"
			}
		],
		optOut: [
			{
				waitForThenClick: "#lm-accept-necessary"
			}
		]
	},
	{
		name: "opera.com",
		vendorUrl: "https://unknown",
		cosmetic: false,
		runContext: {
			main: true,
			frame: false
		},
		intermediate: false,
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: "#cookie-consent .manage-cookies__btn"
			}
		],
		detectPopup: [
			{
				visible: "#cookie-consent .cookie-basic-consent__btn"
			}
		],
		optIn: [
			{
				waitForThenClick: "#cookie-consent .cookie-basic-consent__btn"
			}
		],
		optOut: [
			{
				waitForThenClick: "#cookie-consent .manage-cookies__btn"
			},
			{
				waitForThenClick: "#cookie-consent .active.marketing_option_switch.cookie-consent__switch",
				all: true
			},
			{
				waitForThenClick: "#cookie-consent .cookie-selection__btn"
			}
		],
		test: [
			{
				"eval": "EVAL_OPERA_0"
			}
		]
	},
	{
		name: "osano",
		prehideSelectors: [
			".osano-cm-window,.osano-cm-dialog"
		],
		detectCmp: [
			{
				exists: ".osano-cm-window"
			}
		],
		detectPopup: [
			{
				visible: ".osano-cm-dialog"
			}
		],
		optIn: [
			{
				click: ".osano-cm-accept-all",
				optional: true
			}
		],
		optOut: [
			{
				waitForThenClick: ".osano-cm-denyAll"
			}
		]
	},
	{
		name: "otto.de",
		prehideSelectors: [
			".cookieBanner--visibility"
		],
		detectCmp: [
			{
				exists: ".cookieBanner--visibility"
			}
		],
		detectPopup: [
			{
				visible: ".cookieBanner__wrapper"
			}
		],
		optIn: [
			{
				click: ".js_cookieBannerPermissionButton"
			}
		],
		optOut: [
			{
				click: ".js_cookieBannerProhibitionButton"
			}
		]
	},
	{
		name: "ourworldindata",
		vendorUrl: "https://ourworldindata.org/",
		runContext: {
			urlPattern: "^https://ourworldindata\\.org/"
		},
		prehideSelectors: [
			".cookie-manager"
		],
		detectCmp: [
			{
				exists: ".cookie-manager"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-manager .cookie-notice.open"
			}
		],
		optIn: [
			{
				waitForThenClick: ".cookie-notice [data-test=accept]"
			}
		],
		optOut: [
			{
				waitForThenClick: ".cookie-notice [data-test=reject]"
			}
		]
	},
	{
		name: "pabcogypsum",
		vendorUrl: "https://unknown",
		prehideSelectors: [
			".js-cookie-notice:has(#cookie_settings-form)"
		],
		detectCmp: [
			{
				exists: ".js-cookie-notice #cookie_settings-form"
			}
		],
		detectPopup: [
			{
				visible: ".js-cookie-notice #cookie_settings-form"
			}
		],
		optIn: [
			{
				waitForThenClick: ".js-cookie-notice button[value=allow]"
			}
		],
		optOut: [
			{
				waitForThenClick: ".js-cookie-notice button[value=disable]"
			}
		]
	},
	{
		name: "paypal-us",
		prehideSelectors: [
			"#ccpaCookieContent_wrapper, article.ppvx_modal--overpanel"
		],
		detectCmp: [
			{
				exists: "#ccpaCookieBanner, .privacy-sheet-content"
			}
		],
		detectPopup: [
			{
				visible: "#ccpaCookieBanner, .privacy-sheet-content"
			}
		],
		optIn: [
			{
				click: "#acceptAllButton"
			}
		],
		optOut: [
			{
				"if": {
					exists: "#bannerDeclineButton"
				},
				then: [
					{
						click: "#bannerDeclineButton"
					}
				],
				"else": [
					{
						"if": {
							exists: "a#manageCookiesLink"
						},
						then: [
							{
								click: "a#manageCookiesLink"
							}
						],
						"else": [
							{
								waitForVisible: ".privacy-sheet-content #formContent"
							},
							{
								click: "#formContent .cookiepref-11m2iee-checkbox_base input:checked",
								all: true,
								optional: true
							},
							{
								click: ".cookieAction.saveCookie,.confirmCookie #submitCookiesBtn"
							}
						]
					}
				]
			}
		]
	},
	{
		name: "paypal.com",
		prehideSelectors: [
			"#gdprCookieBanner"
		],
		detectCmp: [
			{
				exists: "#gdprCookieBanner"
			}
		],
		detectPopup: [
			{
				visible: "#gdprCookieContent_wrapper"
			}
		],
		optIn: [
			{
				click: "#acceptAllButton"
			}
		],
		optOut: [
			{
				wait: 200
			},
			{
				click: ".gdprCookieBanner_decline-button"
			}
		],
		test: [
			{
				wait: 500
			},
			{
				"eval": "EVAL_PAYPAL_0"
			}
		]
	},
	{
		name: "pinetools.com",
		cosmetic: true,
		prehideSelectors: [
			"#aviso_cookies"
		],
		detectCmp: [
			{
				exists: "#aviso_cookies"
			}
		],
		detectPopup: [
			{
				exists: ".lang_en #aviso_cookies"
			}
		],
		optIn: [
			{
				click: "#aviso_cookies .a_boton_cerrar"
			}
		],
		optOut: [
			{
				hide: "#aviso_cookies"
			}
		]
	},
	{
		name: "pinterest-business",
		vendorUrl: "https://business.pinterest.com/",
		runContext: {
			urlPattern: "^https://.*\\.pinterest\\.com/"
		},
		prehideSelectors: [
			".BusinessCookieConsent"
		],
		detectCmp: [
			{
				exists: ".BusinessCookieConsent"
			}
		],
		detectPopup: [
			{
				visible: ".BusinessCookieConsent [data-id=cookie-consent-banner-buttons]"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-id=cookie-consent-banner-buttons] > div:nth-child(1) button"
			}
		],
		optOut: [
			{
				waitForThenClick: "[data-id=cookie-consent-banner-buttons] > div:nth-child(2) button"
			}
		]
	},
	{
		name: "pmc",
		cosmetic: true,
		prehideSelectors: [
			"#pmc-pp-tou--notice"
		],
		detectCmp: [
			{
				exists: "#pmc-pp-tou--notice"
			}
		],
		detectPopup: [
			{
				visible: "#pmc-pp-tou--notice"
			}
		],
		optIn: [
			{
				click: "span.pmc-pp-tou--notice-close-btn"
			}
		],
		optOut: [
			{
				hide: "#pmc-pp-tou--notice"
			}
		]
	},
	{
		name: "pornhub.com",
		runContext: {
			urlPattern: "^https://(www\\.)?pornhub\\.com/"
		},
		cosmetic: true,
		prehideSelectors: [
			".cookiesBanner"
		],
		detectCmp: [
			{
				exists: ".cookiesBanner"
			}
		],
		detectPopup: [
			{
				visible: ".cookiesBanner"
			}
		],
		optIn: [
			{
				click: ".cookiesBanner .okButton"
			}
		],
		optOut: [
			{
				hide: ".cookiesBanner"
			}
		]
	},
	{
		name: "pornpics.com",
		cosmetic: true,
		prehideSelectors: [
			"#cookie-contract"
		],
		detectCmp: [
			{
				exists: "#cookie-contract"
			}
		],
		detectPopup: [
			{
				visible: "#cookie-contract"
			}
		],
		optIn: [
			{
				click: "#cookie-contract .icon-cross"
			}
		],
		optOut: [
			{
				hide: "#cookie-contract"
			}
		]
	},
	{
		name: "PrimeBox CookieBar",
		prehideSelectors: [
			"#cookie-bar"
		],
		detectCmp: [
			{
				exists: "#cookie-bar .cb-enable,#cookie-bar .cb-disable,#cookie-bar .cb-policy"
			}
		],
		detectPopup: [
			{
				visible: "#cookie-bar .cb-enable,#cookie-bar .cb-disable,#cookie-bar .cb-policy",
				check: "any"
			}
		],
		optIn: [
			{
				waitForThenClick: "#cookie-bar .cb-enable"
			}
		],
		optOut: [
			{
				click: "#cookie-bar .cb-disable",
				optional: true
			},
			{
				hide: "#cookie-bar"
			}
		],
		test: [
			{
				"eval": "EVAL_PRIMEBOX_0"
			}
		]
	},
	{
		name: "privacymanager.io",
		prehideSelectors: [
			"#gdpr-consent-tool-wrapper",
			"iframe[src^=\"https://cmp-consent-tool.privacymanager.io\"]"
		],
		runContext: {
			urlPattern: "^https://cmp-consent-tool\\.privacymanager\\.io/",
			main: false,
			frame: true
		},
		detectCmp: [
			{
				exists: "button#save"
			}
		],
		detectPopup: [
			{
				visible: "button#save"
			}
		],
		optIn: [
			{
				click: "button#save"
			}
		],
		optOut: [
			{
				"if": {
					exists: "#denyAll"
				},
				then: [
					{
						click: "#denyAll"
					},
					{
						waitForThenClick: ".okButton"
					}
				],
				"else": [
					{
						waitForThenClick: "#manageSettings"
					},
					{
						waitFor: ".purposes-overview-list"
					},
					{
						waitFor: "button#saveAndExit"
					},
					{
						click: "span[role=checkbox][aria-checked=true]",
						all: true,
						optional: true
					},
					{
						click: "button#saveAndExit"
					}
				]
			}
		]
	},
	{
		name: "productz.com",
		vendorUrl: "https://productz.com/",
		runContext: {
			urlPattern: "^https://productz\\.com/"
		},
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: ".c-modal.is-active"
			}
		],
		detectPopup: [
			{
				visible: ".c-modal.is-active"
			}
		],
		optIn: [
			{
				waitForThenClick: ".c-modal.is-active .is-accept"
			}
		],
		optOut: [
			{
				waitForThenClick: ".c-modal.is-active .is-dismiss"
			}
		]
	},
	{
		name: "pubtech",
		prehideSelectors: [
			"#pubtech-cmp"
		],
		detectCmp: [
			{
				exists: "#pubtech-cmp"
			}
		],
		detectPopup: [
			{
				visible: "#pubtech-cmp #pt-actions"
			}
		],
		optIn: [
			{
				"if": {
					exists: "#pt-accept-all"
				},
				then: [
					{
						click: "#pubtech-cmp #pt-actions #pt-accept-all"
					}
				],
				"else": [
					{
						click: "#pubtech-cmp #pt-actions button:nth-of-type(2)"
					}
				]
			}
		],
		optOut: [
			{
				click: "#pubtech-cmp #pt-close"
			}
		],
		test: [
			{
				"eval": "EVAL_PUBTECH_0"
			}
		]
	},
	{
		name: "quantcast",
		prehideSelectors: [
			"#qc-cmp2-main,#qc-cmp2-container"
		],
		detectCmp: [
			{
				exists: "#qc-cmp2-container"
			}
		],
		detectPopup: [
			{
				visible: "#qc-cmp2-ui"
			}
		],
		optOut: [
			{
				waitFor: ".qc-cmp2-summary-buttons > button[mode=\"secondary\"]",
				timeout: 2000
			},
			{
				"if": {
					exists: ".qc-cmp2-summary-buttons > button[mode=\"secondary\"]:nth-of-type(2)"
				},
				then: [
					{
						click: ".qc-cmp2-summary-buttons > button[mode=\"secondary\"]:nth-of-type(2)"
					}
				],
				"else": [
					{
						click: ".qc-cmp2-summary-buttons > button[mode=\"secondary\"]:nth-of-type(1)"
					},
					{
						waitFor: "#qc-cmp2-ui"
					},
					{
						click: ".qc-cmp2-toggle-switch > button[aria-checked=\"true\"]",
						all: true,
						optional: true
					},
					{
						click: ".qc-cmp2-main button[aria-label=\"REJECT ALL\"]",
						optional: true
					},
					{
						waitForThenClick: ".qc-cmp2-main button[aria-label=\"SAVE & EXIT\"],.qc-cmp2-buttons-desktop > button[mode=\"primary\"]",
						timeout: 5000
					}
				]
			}
		],
		optIn: [
			{
				click: ".qc-cmp2-summary-buttons > button[mode=\"primary\"]"
			}
		]
	},
	{
		name: "reddit.com",
		runContext: {
			urlPattern: "^https://www\\.reddit\\.com/"
		},
		prehideSelectors: [
			"[bundlename=reddit_cookie_banner]"
		],
		detectCmp: [
			{
				exists: "reddit-cookie-banner"
			}
		],
		detectPopup: [
			{
				visible: "reddit-cookie-banner"
			}
		],
		optIn: [
			{
				waitForThenClick: [
					"reddit-cookie-banner",
					"#accept-all-cookies-button > button"
				]
			}
		],
		optOut: [
			{
				waitForThenClick: [
					"reddit-cookie-banner",
					"#reject-nonessential-cookies-button > button"
				]
			}
		],
		test: [
			{
				"eval": "EVAL_REDDIT_0"
			}
		]
	},
	{
		name: "roblox",
		vendorUrl: "https://roblox.com",
		cosmetic: false,
		runContext: {
			main: true,
			frame: false,
			urlPattern: "^https://(www\\.)?roblox\\.com/"
		},
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: ".cookie-banner-wrapper"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-banner-wrapper .cookie-banner"
			}
		],
		optIn: [
			{
				waitForThenClick: ".cookie-banner-wrapper button.btn-cta-lg"
			}
		],
		optOut: [
			{
				waitForThenClick: ".cookie-banner-wrapper button.btn-secondary-lg"
			}
		],
		test: [
			{
				"eval": "EVAL_ROBLOX_TEST"
			}
		]
	},
	{
		name: "rog-forum.asus.com",
		runContext: {
			urlPattern: "^https://rog-forum\\.asus\\.com/"
		},
		prehideSelectors: [
			"#cookie-policy-info"
		],
		detectCmp: [
			{
				exists: "#cookie-policy-info"
			}
		],
		detectPopup: [
			{
				visible: "#cookie-policy-info"
			}
		],
		optIn: [
			{
				click: "div.cookie-btn-box > div[aria-label=\"Accept\"]"
			}
		],
		optOut: [
			{
				click: "div.cookie-btn-box > div[aria-label=\"Reject\"]"
			},
			{
				waitForThenClick: ".cookie-policy-lightbox-bottom > div[aria-label=\"Save Settings\"]"
			}
		]
	},
	{
		name: "roofingmegastore.co.uk",
		runContext: {
			urlPattern: "^https://(www\\.)?roofingmegastore\\.co\\.uk"
		},
		prehideSelectors: [
			"#m-cookienotice"
		],
		detectCmp: [
			{
				exists: "#m-cookienotice"
			}
		],
		detectPopup: [
			{
				visible: "#m-cookienotice"
			}
		],
		optIn: [
			{
				click: "#accept-cookies"
			}
		],
		optOut: [
			{
				click: "#manage-cookies"
			},
			{
				waitForThenClick: "#accept-selected"
			}
		]
	},
	{
		name: "samsung.com",
		runContext: {
			urlPattern: "^https://www\\.samsung\\.com/"
		},
		cosmetic: true,
		prehideSelectors: [
			"div.cookie-bar"
		],
		detectCmp: [
			{
				exists: "div.cookie-bar"
			}
		],
		detectPopup: [
			{
				visible: "div.cookie-bar"
			}
		],
		optIn: [
			{
				click: "div.cookie-bar__manage > a"
			}
		],
		optOut: [
			{
				hide: "div.cookie-bar"
			}
		]
	},
	{
		name: "setapp.com",
		vendorUrl: "https://setapp.com/",
		cosmetic: true,
		runContext: {
			urlPattern: "^https://setapp\\.com/"
		},
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: ".cookie-banner.js-cookie-banner"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-banner.js-cookie-banner"
			}
		],
		optIn: [
			{
				waitForThenClick: ".cookie-banner.js-cookie-banner button"
			}
		],
		optOut: [
			{
				hide: ".cookie-banner.js-cookie-banner"
			}
		]
	},
	{
		name: "sibbo",
		prehideSelectors: [
			"sibbo-cmp-layout"
		],
		detectCmp: [
			{
				exists: "sibbo-cmp-layout"
			}
		],
		detectPopup: [
			{
				visible: "#rejectAllMain"
			}
		],
		optIn: [
			{
				click: "#acceptAllMain"
			}
		],
		optOut: [
			{
				click: "#rejectAllMain"
			}
		]
	},
	{
		name: "similarweb.com",
		cosmetic: true,
		prehideSelectors: [
			".app-cookies-notification"
		],
		detectCmp: [
			{
				exists: ".app-cookies-notification"
			}
		],
		detectPopup: [
			{
				exists: ".app-layout .app-cookies-notification"
			}
		],
		optIn: [
			{
				click: "button.app-cookies-notification__dismiss"
			}
		],
		optOut: [
			{
				hide: ".app-layout .app-cookies-notification"
			}
		]
	},
	{
		name: "Sirdata",
		cosmetic: false,
		prehideSelectors: [
			"#sd-cmp"
		],
		detectCmp: [
			{
				exists: "#sd-cmp"
			}
		],
		detectPopup: [
			{
				visible: "#sd-cmp"
			}
		],
		optIn: [
			{
				waitForThenClick: "#sd-cmp .sd-cmp-3cRQ2"
			}
		],
		optOut: [
			{
				waitForThenClick: [
					"#sd-cmp",
					"xpath///span[contains(., 'Do not accept') or contains(., 'Acceptera inte') or contains(., 'No aceptar') or contains(., 'Ikke acceptere') or contains(., 'Nicht akzeptieren') or contains(., 'Не приемам') or contains(., 'Να μην γίνει αποδοχή') or contains(., 'Niet accepteren') or contains(., 'Nepřijímat') or contains(., 'Nie akceptuj') or contains(., 'Nu acceptați') or contains(., 'Não aceitar') or contains(., 'Continuer sans accepter') or contains(., 'Non accettare') or contains(., 'Nem fogad el')]"
				]
			}
		]
	},
	{
		name: "snigel",
		detectCmp: [
			{
				exists: ".snigel-cmp-framework"
			}
		],
		detectPopup: [
			{
				visible: ".snigel-cmp-framework"
			}
		],
		optOut: [
			{
				click: "#sn-b-custom"
			},
			{
				click: "#sn-b-save"
			}
		],
		test: [
			{
				"eval": "EVAL_SNIGEL_0"
			}
		],
		optIn: [
			{
				click: ".snigel-cmp-framework #accept-choices"
			}
		]
	},
	{
		name: "steampowered.com",
		detectCmp: [
			{
				exists: ".cookiepreferences_popup"
			},
			{
				visible: ".cookiepreferences_popup"
			}
		],
		detectPopup: [
			{
				visible: ".cookiepreferences_popup"
			}
		],
		optOut: [
			{
				click: "#rejectAllButton"
			}
		],
		optIn: [
			{
				click: "#acceptAllButton"
			}
		],
		test: [
			{
				wait: 1000
			},
			{
				"eval": "EVAL_STEAMPOWERED_0"
			}
		]
	},
	{
		name: "strato.de",
		prehideSelectors: [
			".consent__wrapper"
		],
		runContext: {
			urlPattern: "^https://www\\.strato\\.de/"
		},
		detectCmp: [
			{
				exists: ".consent"
			}
		],
		detectPopup: [
			{
				visible: ".consent"
			}
		],
		optIn: [
			{
				click: "button.consentAgree"
			}
		],
		optOut: [
			{
				click: "button.consentSettings"
			},
			{
				waitForThenClick: "button#consentSubmit"
			}
		]
	},
	{
		name: "svt.se",
		vendorUrl: "https://www.svt.se/",
		runContext: {
			urlPattern: "^https://www\\.svt\\.se/"
		},
		prehideSelectors: [
			"[class*=CookieConsent__root___]"
		],
		detectCmp: [
			{
				exists: "[class*=CookieConsent__root___]"
			}
		],
		detectPopup: [
			{
				visible: "[class*=CookieConsent__modal___]"
			}
		],
		optIn: [
			{
				waitForThenClick: "[class*=CookieConsent__modal___] > div > button[class*=primary]"
			}
		],
		optOut: [
			{
				waitForThenClick: "[class*=CookieConsent__modal___] > div > button[class*=secondary]:nth-child(2)"
			}
		],
		test: [
			{
				"eval": "EVAL_SVT_TEST"
			}
		]
	},
	{
		name: "takealot.com",
		cosmetic: true,
		prehideSelectors: [
			"div[class^=\"cookies-banner-module_\"]"
		],
		detectCmp: [
			{
				exists: "div[class^=\"cookies-banner-module_cookie-banner_\"]"
			}
		],
		detectPopup: [
			{
				exists: "div[class^=\"cookies-banner-module_cookie-banner_\"]"
			}
		],
		optIn: [
			{
				click: "button[class*=\"cookies-banner-module_dismiss-button_\"]"
			}
		],
		optOut: [
			{
				hide: "div[class^=\"cookies-banner-module_\"]"
			},
			{
				"if": {
					exists: "div[class^=\"cookies-banner-module_small-cookie-banner_\"]"
				},
				then: [
					{
						"eval": "EVAL_TAKEALOT_0"
					}
				],
				"else": [
				]
			}
		]
	},
	{
		name: "tarteaucitron.js",
		prehideSelectors: [
			"#tarteaucitronRoot"
		],
		detectCmp: [
			{
				exists: "#tarteaucitronRoot"
			}
		],
		detectPopup: [
			{
				visible: "#tarteaucitronRoot #tarteaucitronAlertBig",
				check: "any"
			}
		],
		optIn: [
			{
				"eval": "EVAL_TARTEAUCITRON_1"
			}
		],
		optOut: [
			{
				"eval": "EVAL_TARTEAUCITRON_0"
			}
		],
		test: [
			{
				"eval": "EVAL_TARTEAUCITRON_2",
				comment: "sometimes there are required categories, so we check that at least something is false"
			}
		]
	},
	{
		name: "taunton",
		vendorUrl: "https://www.taunton.com/",
		prehideSelectors: [
			"#taunton-user-consent__overlay"
		],
		detectCmp: [
			{
				exists: "#taunton-user-consent__overlay"
			}
		],
		detectPopup: [
			{
				exists: "#taunton-user-consent__overlay:not([aria-hidden=true])"
			}
		],
		optIn: [
			{
				click: "#taunton-user-consent__toolbar input[type=checkbox]:not(:checked)"
			},
			{
				click: "#taunton-user-consent__toolbar button[type=submit]"
			}
		],
		optOut: [
			{
				click: "#taunton-user-consent__toolbar input[type=checkbox]:checked",
				optional: true,
				all: true
			},
			{
				click: "#taunton-user-consent__toolbar button[type=submit]"
			}
		],
		test: [
			{
				"eval": "EVAL_TAUNTON_TEST"
			}
		]
	},
	{
		name: "Tealium",
		prehideSelectors: [
			"#__tealiumGDPRecModal,#__tealiumGDPRcpPrefs,#__tealiumImplicitmodal,#consent-layer"
		],
		detectCmp: [
			{
				exists: "#__tealiumGDPRecModal *,#__tealiumGDPRcpPrefs *,#__tealiumImplicitmodal *"
			},
			{
				"eval": "EVAL_TEALIUM_0"
			}
		],
		detectPopup: [
			{
				visible: "#__tealiumGDPRecModal *,#__tealiumGDPRcpPrefs *,#__tealiumImplicitmodal *",
				check: "any"
			}
		],
		optOut: [
			{
				"eval": "EVAL_TEALIUM_1"
			},
			{
				"eval": "EVAL_TEALIUM_DONOTSELL"
			},
			{
				hide: "#__tealiumGDPRecModal,#__tealiumGDPRcpPrefs,#__tealiumImplicitmodal"
			},
			{
				waitForThenClick: "#cm-acceptNone,.js-accept-essential-cookies",
				timeout: 1000,
				optional: true
			}
		],
		optIn: [
			{
				hide: "#__tealiumGDPRecModal,#__tealiumGDPRcpPrefs"
			},
			{
				"eval": "EVAL_TEALIUM_2"
			}
		],
		test: [
			{
				"eval": "EVAL_TEALIUM_3"
			},
			{
				"eval": "EVAL_TEALIUM_DONOTSELL_CHECK"
			},
			{
				visible: "#__tealiumGDPRecModal,#__tealiumGDPRcpPrefs",
				check: "none"
			}
		]
	},
	{
		name: "temu",
		vendorUrl: "https://temu.com",
		runContext: {
			urlPattern: "^https://([a-z0-9-]+\\.)?temu\\.com/"
		},
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: "div > div > div > div > span[href*=\"/cookie-and-similar-technologies-policy.html\"]"
			}
		],
		detectPopup: [
			{
				visible: "div > div > div > div > span[href*=\"/cookie-and-similar-technologies-policy.html\"]"
			}
		],
		optIn: [
			{
				waitForThenClick: "div > div > div:has(> div > span[href*=\"/cookie-and-similar-technologies-policy.html\"]) > [role=button]:nth-child(3)"
			}
		],
		optOut: [
			{
				"if": {
					exists: "xpath///span[contains(., 'Alle afwijzen') or contains(., 'Reject all') or contains(., 'Tümünü reddet') or contains(., 'Odrzuć wszystko')]"
				},
				then: [
					{
						waitForThenClick: "xpath///span[contains(., 'Alle afwijzen') or contains(., 'Reject all') or contains(., 'Tümünü reddet') or contains(., 'Odrzuć wszystko')]"
					}
				],
				"else": [
					{
						waitForThenClick: "div > div > div:has(> div > span[href*=\"/cookie-and-similar-technologies-policy.html\"]) > [role=button]:nth-child(2)"
					}
				]
			}
		]
	},
	{
		name: "Termly",
		prehideSelectors: [
			"#termly-code-snippet-support"
		],
		detectCmp: [
			{
				exists: "#termly-code-snippet-support"
			}
		],
		detectPopup: [
			{
				visible: "#termly-code-snippet-support div"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-tid=\"banner-accept\"]"
			}
		],
		optOut: [
			{
				"if": {
					exists: "[data-tid=\"banner-decline\"]"
				},
				then: [
					{
						click: "[data-tid=\"banner-decline\"]"
					}
				],
				"else": [
					{
						click: ".t-preference-button"
					},
					{
						wait: 500
					},
					{
						"if": {
							exists: ".t-declineAllButton"
						},
						then: [
							{
								click: ".t-declineAllButton"
							}
						],
						"else": [
							{
								waitForThenClick: ".t-preference-modal input[type=checkbox][checked]:not([disabled])",
								all: true
							},
							{
								waitForThenClick: ".t-saveButton"
							}
						]
					}
				]
			}
		]
	},
	{
		name: "termsfeed",
		vendorUrl: "https://termsfeed.com",
		comment: "v4.x.x",
		prehideSelectors: [
			".termsfeed-com---nb"
		],
		detectCmp: [
			{
				exists: ".termsfeed-com---nb"
			}
		],
		detectPopup: [
			{
				visible: ".termsfeed-com---nb"
			}
		],
		optIn: [
			{
				waitForThenClick: ".cc-nb-okagree"
			}
		],
		optOut: [
			{
				waitForThenClick: ".cc-nb-reject"
			}
		]
	},
	{
		name: "termsfeed3",
		vendorUrl: "https://termsfeed.com",
		comment: "v3.x.x",
		prehideSelectors: [
			".cc_dialog.cc_css_reboot,.cc_overlay_lock"
		],
		detectCmp: [
			{
				exists: ".cc_dialog.cc_css_reboot"
			}
		],
		detectPopup: [
			{
				visible: ".cc_dialog.cc_css_reboot"
			}
		],
		optIn: [
			{
				waitForThenClick: ".cc_dialog.cc_css_reboot .cc_b_ok"
			}
		],
		optOut: [
			{
				"if": {
					exists: ".cc_dialog.cc_css_reboot .cc_b_cp"
				},
				then: [
					{
						click: ".cc_dialog.cc_css_reboot .cc_b_cp"
					},
					{
						waitForVisible: ".cookie-consent-preferences-dialog .cc_cp_f_save button"
					},
					{
						waitForThenClick: ".cookie-consent-preferences-dialog .cc_cp_f_save button"
					}
				],
				"else": [
					{
						hide: ".cc_dialog.cc_css_reboot,.cc_overlay_lock"
					}
				]
			}
		]
	},
	{
		name: "tesla",
		vendorUrl: "https://tesla.com/",
		runContext: {
			main: true,
			frame: false,
			urlPattern: "^https://(www\\.)?tesla\\.com/"
		},
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: "#cookie_banner"
			}
		],
		detectPopup: [
			{
				visible: "#cookie_banner"
			}
		],
		optIn: [
			{
				waitForThenClick: "#tsla-accept-cookie"
			}
		],
		optOut: [
			{
				waitForThenClick: "#tsla-reject-cookie"
			}
		],
		test: [
			{
				"eval": "EVAL_TESLA_TEST"
			}
		]
	},
	{
		name: "Test page cosmetic CMP",
		cosmetic: true,
		prehideSelectors: [
			"#privacy-test-page-cmp-test-prehide"
		],
		detectCmp: [
			{
				exists: "#privacy-test-page-cmp-test-banner"
			}
		],
		detectPopup: [
			{
				visible: "#privacy-test-page-cmp-test-banner"
			}
		],
		optIn: [
			{
				waitFor: "#accept-all"
			},
			{
				click: "#accept-all"
			}
		],
		optOut: [
			{
				hide: "#privacy-test-page-cmp-test-banner"
			}
		],
		test: [
			{
				wait: 500
			},
			{
				"eval": "EVAL_TESTCMP_COSMETIC_0"
			}
		]
	},
	{
		name: "Test page CMP",
		prehideSelectors: [
			"#reject-all"
		],
		detectCmp: [
			{
				exists: "#privacy-test-page-cmp-test"
			}
		],
		detectPopup: [
			{
				visible: "#privacy-test-page-cmp-test"
			}
		],
		optIn: [
			{
				waitFor: "#accept-all"
			},
			{
				click: "#accept-all"
			}
		],
		optOut: [
			{
				waitFor: "#reject-all"
			},
			{
				click: "#reject-all"
			}
		],
		test: [
			{
				"eval": "EVAL_TESTCMP_0"
			}
		]
	},
	{
		name: "thalia.de",
		prehideSelectors: [
			".consent-banner-box"
		],
		detectCmp: [
			{
				exists: "consent-banner[component=consent-banner]"
			}
		],
		detectPopup: [
			{
				visible: ".consent-banner-box"
			}
		],
		optIn: [
			{
				click: ".button-zustimmen"
			}
		],
		optOut: [
			{
				click: "button[data-consent=disagree]"
			}
		]
	},
	{
		name: "thefreedictionary.com",
		prehideSelectors: [
			"#cmpBanner"
		],
		detectCmp: [
			{
				exists: "#cmpBanner"
			}
		],
		detectPopup: [
			{
				visible: "#cmpBanner"
			}
		],
		optIn: [
			{
				"eval": "EVAL_THEFREEDICTIONARY_1"
			}
		],
		optOut: [
			{
				"eval": "EVAL_THEFREEDICTIONARY_0"
			}
		]
	},
	{
		name: "theverge",
		runContext: {
			frame: false,
			main: true,
			urlPattern: "^https://(www)?\\.theverge\\.com"
		},
		intermediate: false,
		prehideSelectors: [
			".duet--cta--cookie-banner"
		],
		detectCmp: [
			{
				exists: ".duet--cta--cookie-banner"
			}
		],
		detectPopup: [
			{
				visible: ".duet--cta--cookie-banner"
			}
		],
		optIn: [
			{
				click: ".duet--cta--cookie-banner button.tracking-12",
				all: false
			}
		],
		optOut: [
			{
				click: ".duet--cta--cookie-banner button.tracking-12 > span"
			}
		],
		test: [
			{
				"eval": "EVAL_THEVERGE_0"
			}
		]
	},
	{
		name: "tidbits-com",
		cosmetic: true,
		prehideSelectors: [
			"#eu_cookie_law_widget-2"
		],
		detectCmp: [
			{
				exists: "#eu_cookie_law_widget-2"
			}
		],
		detectPopup: [
			{
				visible: "#eu_cookie_law_widget-2"
			}
		],
		optIn: [
			{
				click: "#eu-cookie-law form > input.accept"
			}
		],
		optOut: [
			{
				hide: "#eu_cookie_law_widget-2"
			}
		]
	},
	{
		name: "tractor-supply",
		runContext: {
			urlPattern: "^https://www\\.tractorsupply\\.com/"
		},
		cosmetic: true,
		prehideSelectors: [
			".tsc-cookie-banner"
		],
		detectCmp: [
			{
				exists: ".tsc-cookie-banner"
			}
		],
		detectPopup: [
			{
				visible: ".tsc-cookie-banner"
			}
		],
		optIn: [
			{
				click: "#cookie-banner-cancel"
			}
		],
		optOut: [
			{
				hide: ".tsc-cookie-banner"
			}
		]
	},
	{
		name: "trader-joes-com",
		cosmetic: true,
		prehideSelectors: [
			"div.aem-page > div[class^=\"CookiesAlert_cookiesAlert__\"]"
		],
		detectCmp: [
			{
				exists: "div.aem-page > div[class^=\"CookiesAlert_cookiesAlert__\"]"
			}
		],
		detectPopup: [
			{
				visible: "div.aem-page > div[class^=\"CookiesAlert_cookiesAlert__\"]"
			}
		],
		optIn: [
			{
				click: "div[class^=\"CookiesAlert_cookiesAlert__container__\"] button"
			}
		],
		optOut: [
			{
				hide: "div.aem-page > div[class^=\"CookiesAlert_cookiesAlert__\"]"
			}
		]
	},
	{
		name: "transcend",
		vendorUrl: "https://unknown",
		cosmetic: true,
		prehideSelectors: [
			"#transcend-consent-manager"
		],
		detectCmp: [
			{
				exists: "#transcend-consent-manager"
			}
		],
		detectPopup: [
			{
				visible: "#transcend-consent-manager"
			}
		],
		optIn: [
			{
				waitForThenClick: [
					"#transcend-consent-manager",
					"#consentManagerMainDialog .inner-container button"
				]
			}
		],
		optOut: [
			{
				hide: "#transcend-consent-manager"
			}
		]
	},
	{
		name: "transip-nl",
		runContext: {
			urlPattern: "^https://www\\.transip\\.nl/"
		},
		prehideSelectors: [
			"#consent-modal"
		],
		detectCmp: [
			{
				any: [
					{
						exists: "#consent-modal"
					},
					{
						exists: "#privacy-settings-content"
					}
				]
			}
		],
		detectPopup: [
			{
				any: [
					{
						visible: "#consent-modal"
					},
					{
						visible: "#privacy-settings-content"
					}
				]
			}
		],
		optIn: [
			{
				click: "button[type=\"submit\"]"
			}
		],
		optOut: [
			{
				"if": {
					exists: "#privacy-settings-content"
				},
				then: [
					{
						click: "button[type=\"submit\"]"
					}
				],
				"else": [
					{
						click: "div.one-modal__action-footer-column--secondary > a"
					}
				]
			}
		]
	},
	{
		name: "tropicfeel-com",
		prehideSelectors: [
			"#shopify-section-cookies-controller"
		],
		detectCmp: [
			{
				exists: "#shopify-section-cookies-controller"
			}
		],
		detectPopup: [
			{
				visible: "#shopify-section-cookies-controller #cookies-controller-main-pane",
				check: "any"
			}
		],
		optIn: [
			{
				waitForThenClick: "#cookies-controller-main-pane form[data-form-allow-all] button"
			}
		],
		optOut: [
			{
				click: "#cookies-controller-main-pane a[data-tab-target=manage-cookies]"
			},
			{
				waitFor: "#manage-cookies-pane.active"
			},
			{
				click: "#manage-cookies-pane.active input[type=checkbox][checked]:not([disabled])",
				all: true
			},
			{
				click: "#manage-cookies-pane.active button[type=submit]"
			}
		],
		test: [
		]
	},
	{
		name: "true-car",
		runContext: {
			urlPattern: "^https://www\\.truecar\\.com/"
		},
		cosmetic: true,
		prehideSelectors: [
			[
				"div[aria-labelledby=\"cookie-banner-heading\"]"
			]
		],
		detectCmp: [
			{
				exists: "div[aria-labelledby=\"cookie-banner-heading\"]"
			}
		],
		detectPopup: [
			{
				visible: "div[aria-labelledby=\"cookie-banner-heading\"]"
			}
		],
		optIn: [
			{
				click: "div[aria-labelledby=\"cookie-banner-heading\"] > button[aria-label=\"Close\"]"
			}
		],
		optOut: [
			{
				hide: "div[aria-labelledby=\"cookie-banner-heading\"]"
			}
		]
	},
	{
		name: "truyo",
		prehideSelectors: [
			"#truyo-consent-module"
		],
		detectCmp: [
			{
				exists: "#truyo-cookieBarContent"
			}
		],
		detectPopup: [
			{
				visible: "#truyo-consent-module"
			}
		],
		optIn: [
			{
				click: "button#acceptAllCookieButton"
			}
		],
		optOut: [
			{
				click: "button#declineAllCookieButton"
			}
		]
	},
	{
		name: "twcc",
		vendorUrl: "https://unknown",
		cosmetic: false,
		runContext: {
			main: true,
			frame: false,
			urlPattern: ""
		},
		prehideSelectors: [
			"#twcc__mechanism"
		],
		detectCmp: [
			{
				exists: "#twcc__mechanism .twcc__notice"
			}
		],
		detectPopup: [
			{
				visible: "#twcc__mechanism .twcc__notice"
			}
		],
		optIn: [
			{
				waitForThenClick: "#twcc__accept-button"
			}
		],
		optOut: [
			{
				waitForThenClick: "#twcc__decline-button"
			}
		],
		test: [
			{
				"eval": "EVAL_TWCC_TEST"
			}
		]
	},
	{
		name: "twitch-mobile",
		vendorUrl: "https://m.twitch.tv/",
		cosmetic: true,
		runContext: {
			urlPattern: "^https?://m\\.twitch\\.tv"
		},
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: ".ReactModal__Overlay [href=\"https://www.twitch.tv/p/cookie-policy\"]"
			}
		],
		detectPopup: [
			{
				visible: ".ReactModal__Overlay [href=\"https://www.twitch.tv/p/cookie-policy\"]"
			}
		],
		optIn: [
			{
				waitForThenClick: ".ReactModal__Overlay:has([href=\"https://www.twitch.tv/p/cookie-policy\"]) button"
			}
		],
		optOut: [
			{
				hide: ".ReactModal__Overlay:has([href=\"https://www.twitch.tv/p/cookie-policy\"])"
			}
		]
	},
	{
		name: "twitch.tv",
		runContext: {
			urlPattern: "^https?://(www\\.)?twitch\\.tv"
		},
		prehideSelectors: [
			"div:has(> .consent-banner .consent-banner__content--gdpr-v2),.ReactModalPortal:has([data-a-target=consent-modal-save])"
		],
		detectCmp: [
			{
				exists: ".consent-banner .consent-banner__content--gdpr-v2"
			}
		],
		detectPopup: [
			{
				visible: ".consent-banner .consent-banner__content--gdpr-v2"
			}
		],
		optIn: [
			{
				click: "button[data-a-target=\"consent-banner-accept\"]"
			}
		],
		optOut: [
			{
				hide: "div:has(> .consent-banner .consent-banner__content--gdpr-v2)"
			},
			{
				click: "button[data-a-target=\"consent-banner-manage-preferences\"]"
			},
			{
				waitFor: "input[type=checkbox][data-a-target=tw-checkbox]"
			},
			{
				click: "input[type=checkbox][data-a-target=tw-checkbox][checked]:not([disabled])",
				all: true,
				optional: true
			},
			{
				waitForThenClick: "[data-a-target=consent-modal-save]"
			},
			{
				waitForVisible: ".ReactModalPortal:has([data-a-target=consent-modal-save])",
				check: "none"
			}
		]
	},
	{
		name: "twitter",
		runContext: {
			urlPattern: "^https://([a-z0-9-]+\\.)?(twitter|x)\\.com/"
		},
		prehideSelectors: [
			"[data-testid=\"BottomBar\"]"
		],
		detectCmp: [
			{
				exists: "[data-testid=\"BottomBar\"] div"
			}
		],
		detectPopup: [
			{
				visible: "[data-testid=\"BottomBar\"] div"
			}
		],
		optIn: [
			{
				waitForThenClick: "[data-testid=\"BottomBar\"] > div:has(>div:first-child>div:last-child>button[role=button]>span) > div:last-child > button[role=button]:first-child"
			}
		],
		optOut: [
			{
				waitForThenClick: "[data-testid=\"BottomBar\"] > div:has(>div:first-child>div:last-child>button[role=button]>span) > div:last-child > button[role=button]:last-child"
			}
		],
		TODOtest: [
			{
				"eval": "EVAL_document.cookie.includes('d_prefs=MjoxLGNvbnNlbnRfdmVyc2lvbjoy')"
			}
		]
	},
	{
		name: "ubuntu.com",
		prehideSelectors: [
			"dialog.cookie-policy"
		],
		detectCmp: [
			{
				any: [
					{
						exists: "dialog.cookie-policy header"
					},
					{
						exists: "xpath///*[@id=\"modal\"]/div/header"
					}
				]
			}
		],
		detectPopup: [
			{
				any: [
					{
						visible: "dialog header"
					},
					{
						visible: "xpath///*[@id=\"modal\"]/div/header"
					}
				]
			}
		],
		optIn: [
			{
				any: [
					{
						waitForThenClick: "#cookie-policy-button-accept"
					},
					{
						waitForThenClick: "xpath///*[@id=\"cookie-policy-button-accept\"]"
					}
				]
			}
		],
		optOut: [
			{
				any: [
					{
						waitForThenClick: "button.js-manage"
					},
					{
						waitForThenClick: "xpath///*[@id=\"cookie-policy-content\"]/p[4]/button[2]"
					}
				]
			},
			{
				waitForThenClick: "dialog.cookie-policy .p-switch__input:checked",
				optional: true,
				all: true,
				timeout: 500
			},
			{
				any: [
					{
						waitForThenClick: "dialog.cookie-policy .js-save-preferences"
					},
					{
						waitForThenClick: "xpath///*[@id=\"modal\"]/div/button"
					}
				]
			}
		],
		test: [
			{
				"eval": "EVAL_UBUNTU_COM_0"
			}
		]
	},
	{
		name: "UK Cookie Consent",
		prehideSelectors: [
			"#catapult-cookie-bar"
		],
		cosmetic: true,
		detectCmp: [
			{
				exists: "#catapult-cookie-bar"
			}
		],
		detectPopup: [
			{
				exists: ".has-cookie-bar #catapult-cookie-bar"
			}
		],
		optIn: [
			{
				click: "#catapultCookie"
			}
		],
		optOut: [
			{
				hide: "#catapult-cookie-bar"
			}
		],
		test: [
			{
				"eval": "EVAL_UK_COOKIE_CONSENT_0"
			}
		]
	},
	{
		name: "urbanarmorgear-com",
		cosmetic: true,
		prehideSelectors: [
			"div[class^=\"Layout__CookieBannerContainer-\"]"
		],
		detectCmp: [
			{
				exists: "div[class^=\"Layout__CookieBannerContainer-\"]"
			}
		],
		detectPopup: [
			{
				visible: "div[class^=\"Layout__CookieBannerContainer-\"]"
			}
		],
		optIn: [
			{
				click: "button[class^=\"CookieBanner__AcceptButton\"]"
			}
		],
		optOut: [
			{
				hide: "div[class^=\"Layout__CookieBannerContainer-\"]"
			}
		]
	},
	{
		name: "usercentrics-api",
		detectCmp: [
			{
				exists: "#usercentrics-root,#usercentrics-cmp-ui"
			}
		],
		detectPopup: [
			{
				"eval": "EVAL_USERCENTRICS_API_0"
			},
			{
				"if": {
					exists: "#usercentrics-cmp-ui"
				},
				then: [
					{
						waitForVisible: "#usercentrics-cmp-ui",
						timeout: 2000
					}
				],
				"else": [
					{
						exists: [
							"#usercentrics-root",
							"[data-testid=uc-container]"
						]
					},
					{
						waitForVisible: "#usercentrics-root",
						timeout: 2000
					}
				]
			}
		],
		optIn: [
			{
				"eval": "EVAL_USERCENTRICS_API_3"
			},
			{
				"eval": "EVAL_USERCENTRICS_API_1"
			},
			{
				"eval": "EVAL_USERCENTRICS_API_5"
			}
		],
		optOut: [
			{
				"eval": "EVAL_USERCENTRICS_API_1"
			},
			{
				"eval": "EVAL_USERCENTRICS_API_2"
			}
		],
		test: [
			{
				"eval": "EVAL_USERCENTRICS_API_6"
			}
		]
	},
	{
		name: "usercentrics-button",
		detectCmp: [
			{
				exists: "#usercentrics-button"
			}
		],
		detectPopup: [
			{
				visible: "#usercentrics-button #uc-btn-accept-banner"
			}
		],
		optIn: [
			{
				click: "#usercentrics-button #uc-btn-accept-banner"
			}
		],
		optOut: [
			{
				click: "#usercentrics-button #uc-btn-deny-banner"
			}
		],
		test: [
			{
				"eval": "EVAL_USERCENTRICS_BUTTON_0"
			}
		]
	},
	{
		name: "uswitch.com",
		runContext: {
			main: true,
			frame: false,
			urlPattern: "^https://(www\\.)?uswitch\\.com/"
		},
		prehideSelectors: [
			".ucb"
		],
		detectCmp: [
			{
				exists: ".ucb-banner"
			}
		],
		detectPopup: [
			{
				visible: ".ucb-banner"
			}
		],
		optIn: [
			{
				waitForThenClick: ".ucb-banner .ucb-btn-accept"
			}
		],
		optOut: [
			{
				waitForThenClick: ".ucb-banner .ucb-btn-save"
			}
		]
	},
	{
		name: "vodafone.de",
		runContext: {
			urlPattern: "^https://www\\.vodafone\\.de/"
		},
		prehideSelectors: [
			".dip-consent,.dip-consent-container"
		],
		detectCmp: [
			{
				exists: ".dip-consent-container"
			}
		],
		detectPopup: [
			{
				visible: ".dip-consent-content"
			}
		],
		optOut: [
			{
				click: ".dip-consent-btn[tabindex=\"2\"]"
			}
		],
		optIn: [
			{
				click: ".dip-consent-btn[tabindex=\"1\"]"
			}
		]
	},
	{
		name: "waitrose.com",
		prehideSelectors: [
			"div[aria-labelledby=CookieAlertModalHeading]",
			"section[data-test=initial-waitrose-cookie-consent-banner]",
			"section[data-test=cookie-consent-modal]"
		],
		detectCmp: [
			{
				exists: "section[data-test=initial-waitrose-cookie-consent-banner]"
			}
		],
		detectPopup: [
			{
				visible: "section[data-test=initial-waitrose-cookie-consent-banner]"
			}
		],
		optIn: [
			{
				click: "button[data-test=accept-all]"
			}
		],
		optOut: [
			{
				click: "button[data-test=manage-cookies]"
			},
			{
				wait: 200
			},
			{
				"eval": "EVAL_WAITROSE_0"
			},
			{
				click: "button[data-test=submit]"
			}
		],
		test: [
			{
				"eval": "EVAL_WAITROSE_1"
			}
		]
	},
	{
		name: "webflow",
		vendorUrl: "https://webflow.com/",
		prehideSelectors: [
			".fs-cc-components"
		],
		detectCmp: [
			{
				exists: ".fs-cc-components"
			}
		],
		detectPopup: [
			{
				visible: ".fs-cc-components"
			},
			{
				visible: "[fs-cc=banner]"
			}
		],
		optIn: [
			{
				wait: 500
			},
			{
				waitForThenClick: "[fs-cc=banner] [fs-cc=allow]"
			}
		],
		optOut: [
			{
				wait: 500
			},
			{
				waitForThenClick: "[fs-cc=banner] [fs-cc=deny]"
			}
		]
	},
	{
		name: "wetransfer.com",
		detectCmp: [
			{
				exists: ".welcome__cookie-notice"
			}
		],
		detectPopup: [
			{
				visible: ".welcome__cookie-notice"
			}
		],
		optIn: [
			{
				click: ".welcome__button--accept"
			}
		],
		optOut: [
			{
				click: ".welcome__button--decline"
			}
		]
	},
	{
		name: "whitepages.com",
		runContext: {
			urlPattern: "^https://www\\.whitepages\\.com/"
		},
		cosmetic: true,
		prehideSelectors: [
			".cookie-wrapper, .cookie-overlay"
		],
		detectCmp: [
			{
				exists: ".cookie-wrapper"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-overlay"
			}
		],
		optIn: [
			{
				click: "button[aria-label=\"Got it\"]"
			}
		],
		optOut: [
			{
				hide: ".cookie-wrapper"
			}
		]
	},
	{
		name: "wolframalpha",
		vendorUrl: "https://www.wolframalpha.com",
		prehideSelectors: [
		],
		cosmetic: true,
		runContext: {
			urlPattern: "^https://www\\.wolframalpha\\.com/"
		},
		detectCmp: [
			{
				exists: "section._a_yb"
			}
		],
		detectPopup: [
			{
				visible: "section._a_yb"
			}
		],
		optIn: [
			{
				waitForThenClick: "section._a_yb button"
			}
		],
		optOut: [
			{
				hide: "section._a_yb"
			}
		]
	},
	{
		name: "woo-commerce-com",
		prehideSelectors: [
			".wccom-comp-privacy-banner .wccom-privacy-banner"
		],
		detectCmp: [
			{
				exists: ".wccom-comp-privacy-banner .wccom-privacy-banner"
			}
		],
		detectPopup: [
			{
				exists: ".wccom-comp-privacy-banner .wccom-privacy-banner"
			}
		],
		optIn: [
			{
				click: ".wccom-privacy-banner__content-buttons button.is-primary"
			}
		],
		optOut: [
			{
				click: ".wccom-privacy-banner__content-buttons button.is-secondary"
			},
			{
				waitForThenClick: "input[type=checkbox][checked]:not([disabled])",
				all: true
			},
			{
				click: "div.wccom-modal__footer > button"
			}
		]
	},
	{
		name: "WP Cookie Notice for GDPR",
		vendorUrl: "https://wordpress.org/plugins/gdpr-cookie-consent/",
		prehideSelectors: [
			"#gdpr-cookie-consent-bar"
		],
		detectCmp: [
			{
				exists: "#gdpr-cookie-consent-bar"
			}
		],
		detectPopup: [
			{
				visible: "#gdpr-cookie-consent-bar"
			}
		],
		optIn: [
			{
				waitForThenClick: "#gdpr-cookie-consent-bar #cookie_action_accept"
			}
		],
		optOut: [
			{
				waitForThenClick: "#gdpr-cookie-consent-bar #cookie_action_reject"
			}
		],
		test: [
			{
				"eval": "EVAL_WP_COOKIE_NOTICE_0"
			}
		]
	},
	{
		name: "wpcc",
		cosmetic: true,
		prehideSelectors: [
			".wpcc-container"
		],
		detectCmp: [
			{
				exists: ".wpcc-container"
			}
		],
		detectPopup: [
			{
				exists: ".wpcc-container .wpcc-message"
			}
		],
		optIn: [
			{
				click: ".wpcc-compliance .wpcc-btn"
			}
		],
		optOut: [
			{
				hide: ".wpcc-container"
			}
		]
	},
	{
		name: "xe.com",
		vendorUrl: "https://www.xe.com/",
		runContext: {
			urlPattern: "^https://www\\.xe\\.com/"
		},
		prehideSelectors: [
			"[class*=ConsentBanner]"
		],
		detectCmp: [
			{
				exists: "[class*=ConsentBanner]"
			}
		],
		detectPopup: [
			{
				visible: "[class*=ConsentBanner]"
			}
		],
		optIn: [
			{
				waitForThenClick: "[class*=ConsentBanner] .egnScw"
			}
		],
		optOut: [
			{
				wait: 1000
			},
			{
				waitForThenClick: "[class*=ConsentBanner] .frDWEu"
			},
			{
				waitForThenClick: "[class*=ConsentBanner] .hXIpFU"
			}
		],
		test: [
			{
				"eval": "EVAL_XE_TEST"
			}
		]
	},
	{
		name: "xhamster-eu",
		prehideSelectors: [
			".cookies-modal"
		],
		detectCmp: [
			{
				exists: ".cookies-modal"
			}
		],
		detectPopup: [
			{
				exists: ".cookies-modal"
			}
		],
		optIn: [
			{
				click: "button.cmd-button-accept-all"
			}
		],
		optOut: [
			{
				click: "button.cmd-button-reject-all"
			}
		]
	},
	{
		name: "xhamster-us",
		runContext: {
			urlPattern: "^https://(www\\.)?xhamster\\d?\\.com"
		},
		cosmetic: true,
		prehideSelectors: [
			".cookie-announce"
		],
		detectCmp: [
			{
				exists: ".cookie-announce"
			}
		],
		detectPopup: [
			{
				visible: ".cookie-announce .announce-text"
			}
		],
		optIn: [
			{
				click: ".cookie-announce button.xh-button"
			}
		],
		optOut: [
			{
				hide: ".cookie-announce"
			}
		]
	},
	{
		name: "xing.com",
		detectCmp: [
			{
				exists: "div[class^=cookie-consent-CookieConsent]"
			}
		],
		detectPopup: [
			{
				exists: "div[class^=cookie-consent-CookieConsent]"
			}
		],
		optIn: [
			{
				click: "#consent-accept-button"
			}
		],
		optOut: [
			{
				click: "#consent-settings-button"
			},
			{
				click: ".consent-banner-button-accept-overlay"
			}
		],
		test: [
			{
				"eval": "EVAL_XING_0"
			}
		]
	},
	{
		name: "xnxx-com",
		cosmetic: true,
		prehideSelectors: [
			"#cookies-use-alert"
		],
		detectCmp: [
			{
				exists: "#cookies-use-alert"
			}
		],
		detectPopup: [
			{
				visible: "#cookies-use-alert"
			}
		],
		optIn: [
			{
				click: "#cookies-use-alert .close"
			}
		],
		optOut: [
			{
				hide: "#cookies-use-alert"
			}
		]
	},
	{
		name: "xvideos",
		vendorUrl: "https://xvideos.com",
		runContext: {
			urlPattern: "^https://[^/]*xvideos\\.com/"
		},
		prehideSelectors: [
		],
		detectCmp: [
			{
				exists: ".disclaimer-opened #disclaimer-cookies"
			}
		],
		detectPopup: [
			{
				visible: ".disclaimer-opened #disclaimer-cookies"
			}
		],
		optIn: [
			{
				waitForThenClick: "#disclaimer-accept_cookies"
			}
		],
		optOut: [
			{
				waitForThenClick: "#disclaimer-reject_cookies"
			}
		]
	},
	{
		name: "Yahoo",
		runContext: {
			urlPattern: "^https://consent\\.yahoo\\.com/v2/"
		},
		prehideSelectors: [
			"#reject-all"
		],
		detectCmp: [
			{
				exists: "#consent-page"
			}
		],
		detectPopup: [
			{
				visible: "#consent-page"
			}
		],
		optIn: [
			{
				waitForThenClick: "#consent-page button[value=agree]"
			}
		],
		optOut: [
			{
				waitForThenClick: "#consent-page button[value=reject]"
			}
		]
	},
	{
		name: "youporn.com",
		cosmetic: true,
		prehideSelectors: [
			".euCookieModal, #js_euCookieModal"
		],
		detectCmp: [
			{
				exists: ".euCookieModal"
			}
		],
		detectPopup: [
			{
				exists: ".euCookieModal, #js_euCookieModal"
			}
		],
		optIn: [
			{
				click: "button[name=\"user_acceptCookie\"]"
			}
		],
		optOut: [
			{
				hide: ".euCookieModal"
			}
		]
	},
	{
		name: "youtube-desktop",
		prehideSelectors: [
			"tp-yt-iron-overlay-backdrop.opened",
			"ytd-consent-bump-v2-lightbox"
		],
		detectCmp: [
			{
				exists: "ytd-consent-bump-v2-lightbox tp-yt-paper-dialog"
			},
			{
				exists: "ytd-consent-bump-v2-lightbox tp-yt-paper-dialog a[href^=\"https://consent.youtube.com/\"]"
			}
		],
		detectPopup: [
			{
				visible: "ytd-consent-bump-v2-lightbox tp-yt-paper-dialog"
			}
		],
		optIn: [
			{
				waitForThenClick: "ytd-consent-bump-v2-lightbox .eom-buttons .eom-button-row:first-child ytd-button-renderer:last-child #button,ytd-consent-bump-v2-lightbox .eom-buttons .eom-button-row:first-child ytd-button-renderer:last-child button"
			},
			{
				wait: 500
			}
		],
		optOut: [
			{
				waitForThenClick: "ytd-consent-bump-v2-lightbox .eom-buttons .eom-button-row:first-child ytd-button-renderer:first-child #button,ytd-consent-bump-v2-lightbox .eom-buttons .eom-button-row:first-child ytd-button-renderer:first-child button"
			},
			{
				wait: 500
			}
		],
		test: [
			{
				wait: 500
			},
			{
				"eval": "EVAL_YOUTUBE_DESKTOP_0"
			}
		]
	},
	{
		name: "youtube-mobile",
		prehideSelectors: [
			".consent-bump-v2-lightbox"
		],
		detectCmp: [
			{
				exists: "ytm-consent-bump-v2-renderer"
			}
		],
		detectPopup: [
			{
				visible: "ytm-consent-bump-v2-renderer"
			}
		],
		optIn: [
			{
				waitForThenClick: "ytm-consent-bump-v2-renderer .privacy-terms + .one-col-dialog-buttons c3-material-button:first-child button, ytm-consent-bump-v2-renderer .privacy-terms + .one-col-dialog-buttons ytm-button-renderer:first-child button"
			},
			{
				wait: 500
			}
		],
		optOut: [
			{
				waitForThenClick: "ytm-consent-bump-v2-renderer .privacy-terms + .one-col-dialog-buttons c3-material-button:nth-child(2) button, ytm-consent-bump-v2-renderer .privacy-terms + .one-col-dialog-buttons ytm-button-renderer:nth-child(2) button"
			},
			{
				wait: 500
			}
		],
		test: [
			{
				wait: 500
			},
			{
				"eval": "EVAL_YOUTUBE_MOBILE_0"
			}
		]
	},
	{
		name: "zdf",
		prehideSelectors: [
			"#zdf-cmp-banner-sdk"
		],
		detectCmp: [
			{
				exists: "#zdf-cmp-banner-sdk"
			}
		],
		detectPopup: [
			{
				visible: "#zdf-cmp-main.zdf-cmp-show"
			}
		],
		optIn: [
			{
				waitForThenClick: "#zdf-cmp-main #zdf-cmp-accept-btn"
			}
		],
		optOut: [
			{
				waitForThenClick: "#zdf-cmp-main #zdf-cmp-deny-btn"
			}
		],
		test: [
		]
	},
	{
		name: "zentralruf-de",
		runContext: {
			urlPattern: "^https://(www\\.)?zentralruf\\.de"
		},
		prehideSelectors: [
			"#cookie_modal_wrapper"
		],
		detectCmp: [
			{
				exists: "#cookie_modal_wrapper"
			}
		],
		detectPopup: [
			{
				visible: "#cookie_modal_wrapper"
			}
		],
		optIn: [
			{
				waitForThenClick: "#cookie_modal_wrapper #cookie_modal_button_consent_all"
			}
		],
		optOut: [
			{
				waitForThenClick: "#cookie_modal_wrapper #cookie_modal_button_choose"
			}
		]
	}
];
const consentomatic = {
	"didomi.io": {
		detectors: [
			{
				presentMatcher: {
					target: {
						selector: "#didomi-host, #didomi-notice"
					},
					type: "css"
				},
				showingMatcher: {
					target: {
						selector: "body.didomi-popup-open, .didomi-notice-banner"
					},
					type: "css"
				}
			}
		],
		methods: [
			{
				action: {
					target: {
						selector: ".didomi-popup-notice-buttons .didomi-button:not(.didomi-button-highlight), .didomi-notice-banner .didomi-learn-more-button"
					},
					type: "click"
				},
				name: "OPEN_OPTIONS"
			},
			{
				action: {
					actions: [
						{
							retries: 50,
							target: {
								selector: "#didomi-purpose-cookies"
							},
							type: "waitcss",
							waitTime: 50
						},
						{
							consents: [
								{
									description: "Share (everything) with others",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-share_whith_others]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-share_whith_others]:last-child"
										},
										type: "click"
									},
									type: "X"
								},
								{
									description: "Information storage and access",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-cookies]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-cookies]:last-child"
										},
										type: "click"
									},
									type: "D"
								},
								{
									description: "Content selection, offers and marketing",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-CL-T1Rgm7]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-CL-T1Rgm7]:last-child"
										},
										type: "click"
									},
									type: "E"
								},
								{
									description: "Analytics",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-analytics]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-analytics]:last-child"
										},
										type: "click"
									},
									type: "B"
								},
								{
									description: "Analytics",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-M9NRHJe3G]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-M9NRHJe3G]:last-child"
										},
										type: "click"
									},
									type: "B"
								},
								{
									description: "Ad and content selection",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-advertising_personalization]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-advertising_personalization]:last-child"
										},
										type: "click"
									},
									type: "F"
								},
								{
									description: "Ad and content selection",
									falseAction: {
										parent: {
											childFilter: {
												target: {
													selector: "#didomi-purpose-pub-ciblee"
												}
											},
											selector: ".didomi-consent-popup-data-processing, .didomi-components-accordion-label-container"
										},
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-pub-ciblee]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-pub-ciblee]:last-child"
										},
										type: "click"
									},
									type: "F"
								},
								{
									description: "Ad and content selection - basics",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-q4zlJqdcD]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-q4zlJqdcD]:last-child"
										},
										type: "click"
									},
									type: "F"
								},
								{
									description: "Ad and content selection - partners and subsidiaries",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-partenaire-cAsDe8jC]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-partenaire-cAsDe8jC]:last-child"
										},
										type: "click"
									},
									type: "F"
								},
								{
									description: "Ad and content selection - social networks",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-p4em9a8m]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-p4em9a8m]:last-child"
										},
										type: "click"
									},
									type: "F"
								},
								{
									description: "Ad and content selection - others",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-autres-pub]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-autres-pub]:last-child"
										},
										type: "click"
									},
									type: "F"
								},
								{
									description: "Social networks",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-reseauxsociaux]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-reseauxsociaux]:last-child"
										},
										type: "click"
									},
									type: "A"
								},
								{
									description: "Social networks",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-social_media]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-social_media]:last-child"
										},
										type: "click"
									},
									type: "A"
								},
								{
									description: "Content selection",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-content_personalization]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-content_personalization]:last-child"
										},
										type: "click"
									},
									type: "E"
								},
								{
									description: "Ad delivery",
									falseAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-ad_delivery]:first-child"
										},
										type: "click"
									},
									trueAction: {
										target: {
											selector: ".didomi-components-radio__option[aria-describedby=didomi-purpose-ad_delivery]:last-child"
										},
										type: "click"
									},
									type: "F"
								}
							],
							type: "consent"
						},
						{
							action: {
								consents: [
									{
										matcher: {
											childFilter: {
												target: {
													selector: ":not(.didomi-components-radio__option--selected)"
												}
											},
											type: "css"
										},
										trueAction: {
											target: {
												selector: ":nth-child(2)"
											},
											type: "click"
										},
										falseAction: {
											target: {
												selector: ":first-child"
											},
											type: "click"
										},
										type: "X"
									}
								],
								type: "consent"
							},
							target: {
								selector: ".didomi-components-radio"
							},
							type: "foreach"
						}
					],
					type: "list"
				},
				name: "DO_CONSENT"
			},
			{
				action: {
					parent: {
						selector: ".didomi-consent-popup-footer .didomi-consent-popup-actions"
					},
					target: {
						selector: ".didomi-components-button:first-child"
					},
					type: "click"
				},
				name: "SAVE_CONSENT"
			}
		]
	},
	oil: {
		detectors: [
			{
				presentMatcher: {
					target: {
						selector: ".as-oil-content-overlay"
					},
					type: "css"
				},
				showingMatcher: {
					target: {
						selector: ".as-oil-content-overlay"
					},
					type: "css"
				}
			}
		],
		methods: [
			{
				action: {
					actions: [
						{
							target: {
								selector: ".as-js-advanced-settings"
							},
							type: "click"
						},
						{
							retries: "10",
							target: {
								selector: ".as-oil-cpc__purpose-container"
							},
							type: "waitcss",
							waitTime: "250"
						}
					],
					type: "list"
				},
				name: "OPEN_OPTIONS"
			},
			{
				action: {
					actions: [
						{
							consents: [
								{
									matcher: {
										parent: {
											selector: ".as-oil-cpc__purpose-container",
											textFilter: [
												"Information storage and access",
												"Opbevaring af og adgang til oplysninger på din enhed"
											]
										},
										target: {
											selector: "input"
										},
										type: "checkbox"
									},
									toggleAction: {
										parent: {
											selector: ".as-oil-cpc__purpose-container",
											textFilter: [
												"Information storage and access",
												"Opbevaring af og adgang til oplysninger på din enhed"
											]
										},
										target: {
											selector: ".as-oil-cpc__switch"
										},
										type: "click"
									},
									type: "D"
								},
								{
									matcher: {
										parent: {
											selector: ".as-oil-cpc__purpose-container",
											textFilter: [
												"Personlige annoncer",
												"Personalisation"
											]
										},
										target: {
											selector: "input"
										},
										type: "checkbox"
									},
									toggleAction: {
										parent: {
											selector: ".as-oil-cpc__purpose-container",
											textFilter: [
												"Personlige annoncer",
												"Personalisation"
											]
										},
										target: {
											selector: ".as-oil-cpc__switch"
										},
										type: "click"
									},
									type: "E"
								},
								{
									matcher: {
										parent: {
											selector: ".as-oil-cpc__purpose-container",
											textFilter: [
												"Annoncevalg, levering og rapportering",
												"Ad selection, delivery, reporting"
											]
										},
										target: {
											selector: "input"
										},
										type: "checkbox"
									},
									toggleAction: {
										parent: {
											selector: ".as-oil-cpc__purpose-container",
											textFilter: [
												"Annoncevalg, levering og rapportering",
												"Ad selection, delivery, reporting"
											]
										},
										target: {
											selector: ".as-oil-cpc__switch"
										},
										type: "click"
									},
									type: "F"
								},
								{
									matcher: {
										parent: {
											selector: ".as-oil-cpc__purpose-container",
											textFilter: [
												"Personalisering af indhold",
												"Content selection, delivery, reporting"
											]
										},
										target: {
											selector: "input"
										},
										type: "checkbox"
									},
									toggleAction: {
										parent: {
											selector: ".as-oil-cpc__purpose-container",
											textFilter: [
												"Personalisering af indhold",
												"Content selection, delivery, reporting"
											]
										},
										target: {
											selector: ".as-oil-cpc__switch"
										},
										type: "click"
									},
									type: "E"
								},
								{
									matcher: {
										parent: {
											childFilter: {
												target: {
													selector: ".as-oil-cpc__purpose-header",
													textFilter: [
														"Måling",
														"Measurement"
													]
												}
											},
											selector: ".as-oil-cpc__purpose-container"
										},
										target: {
											selector: "input"
										},
										type: "checkbox"
									},
									toggleAction: {
										parent: {
											childFilter: {
												target: {
													selector: ".as-oil-cpc__purpose-header",
													textFilter: [
														"Måling",
														"Measurement"
													]
												}
											},
											selector: ".as-oil-cpc__purpose-container"
										},
										target: {
											selector: ".as-oil-cpc__switch"
										},
										type: "click"
									},
									type: "B"
								},
								{
									matcher: {
										parent: {
											selector: ".as-oil-cpc__purpose-container",
											textFilter: "Google"
										},
										target: {
											selector: "input"
										},
										type: "checkbox"
									},
									toggleAction: {
										parent: {
											selector: ".as-oil-cpc__purpose-container",
											textFilter: "Google"
										},
										target: {
											selector: ".as-oil-cpc__switch"
										},
										type: "click"
									},
									type: "F"
								}
							],
							type: "consent"
						}
					],
					type: "list"
				},
				name: "DO_CONSENT"
			},
			{
				action: {
					target: {
						selector: ".as-oil__btn-optin"
					},
					type: "click"
				},
				name: "SAVE_CONSENT"
			},
			{
				action: {
					target: {
						selector: "div.as-oil"
					},
					type: "hide"
				},
				name: "HIDE_CMP"
			}
		]
	},
	optanon: {
		detectors: [
			{
				presentMatcher: {
					target: {
						selector: "#optanon-menu, .optanon-alert-box-wrapper"
					},
					type: "css"
				},
				showingMatcher: {
					target: {
						displayFilter: true,
						selector: ".optanon-alert-box-wrapper"
					},
					type: "css"
				}
			}
		],
		methods: [
			{
				action: {
					actions: [
						{
							target: {
								selector: ".optanon-alert-box-wrapper .optanon-toggle-display, a[onclick*='OneTrust.ToggleInfoDisplay()'], a[onclick*='Optanon.ToggleInfoDisplay()']"
							},
							type: "click"
						}
					],
					type: "list"
				},
				name: "OPEN_OPTIONS"
			},
			{
				action: {
					actions: [
						{
							target: {
								selector: ".preference-menu-item #Your-privacy"
							},
							type: "click"
						},
						{
							target: {
								selector: "#optanon-vendor-consent-text"
							},
							type: "click"
						},
						{
							action: {
								consents: [
									{
										matcher: {
											target: {
												selector: "input"
											},
											type: "checkbox"
										},
										toggleAction: {
											target: {
												selector: "label"
											},
											type: "click"
										},
										type: "X"
									}
								],
								type: "consent"
							},
							target: {
								selector: "#optanon-vendor-consent-list .vendor-item"
							},
							type: "foreach"
						},
						{
							target: {
								selector: ".vendor-consent-back-link"
							},
							type: "click"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-performance"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-performance"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "B"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-functional"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-functional"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "E"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-advertising"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-advertising"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "F"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-social"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-social"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "B"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Social Media Cookies"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Social Media Cookies"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "B"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Personalisation"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Personalisation"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "E"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Site monitoring cookies"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Site monitoring cookies"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "B"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Third party privacy-enhanced content"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Third party privacy-enhanced content"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "X"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Performance & Advertising Cookies"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Performance & Advertising Cookies"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "F"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Information storage and access"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Information storage and access"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "D"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Ad selection, delivery, reporting"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Ad selection, delivery, reporting"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "F"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Content selection, delivery, reporting"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Content selection, delivery, reporting"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "E"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Measurement"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Measurement"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "B"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Recommended Cookies"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Recommended Cookies"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "X"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Unclassified Cookies"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Unclassified Cookies"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "X"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Analytical Cookies"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Analytical Cookies"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "B"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Marketing Cookies"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Marketing Cookies"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "F"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Personalization"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Personalization"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "E"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Ad Selection, Delivery & Reporting"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Ad Selection, Delivery & Reporting"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "F"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						},
						{
							parent: {
								selector: "#optanon-menu, .optanon-menu"
							},
							target: {
								selector: ".menu-item-necessary",
								textFilter: "Content Selection, Delivery & Reporting"
							},
							trueAction: {
								actions: [
									{
										parent: {
											selector: "#optanon-menu, .optanon-menu"
										},
										target: {
											selector: ".menu-item-necessary",
											textFilter: "Content Selection, Delivery & Reporting"
										},
										type: "click"
									},
									{
										consents: [
											{
												matcher: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status input"
													},
													type: "checkbox"
												},
												toggleAction: {
													parent: {
														selector: "#optanon-popup-body-right"
													},
													target: {
														selector: ".optanon-status label"
													},
													type: "click"
												},
												type: "E"
											}
										],
										type: "consent"
									}
								],
								type: "list"
							},
							type: "ifcss"
						}
					],
					type: "list"
				},
				name: "DO_CONSENT"
			},
			{
				action: {
					parent: {
						selector: ".optanon-save-settings-button"
					},
					target: {
						selector: ".optanon-white-button-middle"
					},
					type: "click"
				},
				name: "SAVE_CONSENT"
			},
			{
				action: {
					actions: [
						{
							target: {
								selector: "#optanon-popup-wrapper"
							},
							type: "hide"
						},
						{
							target: {
								selector: "#optanon-popup-bg"
							},
							type: "hide"
						},
						{
							target: {
								selector: ".optanon-alert-box-wrapper"
							},
							type: "hide"
						}
					],
					type: "list"
				},
				name: "HIDE_CMP"
			}
		]
	},
	quantcast2: {
		detectors: [
			{
				presentMatcher: {
					target: {
						selector: "[data-tracking-opt-in-overlay]"
					},
					type: "css"
				},
				showingMatcher: {
					target: {
						selector: "[data-tracking-opt-in-overlay] [data-tracking-opt-in-learn-more]"
					},
					type: "css"
				}
			}
		],
		methods: [
			{
				action: {
					target: {
						selector: "[data-tracking-opt-in-overlay] [data-tracking-opt-in-learn-more]"
					},
					type: "click"
				},
				name: "OPEN_OPTIONS"
			},
			{
				action: {
					actions: [
						{
							type: "wait",
							waitTime: 500
						},
						{
							action: {
								actions: [
									{
										target: {
											selector: "div",
											textFilter: [
												"Information storage and access"
											]
										},
										trueAction: {
											consents: [
												{
													matcher: {
														target: {
															selector: "input"
														},
														type: "checkbox"
													},
													toggleAction: {
														target: {
															selector: "label"
														},
														type: "click"
													},
													type: "D"
												}
											],
											type: "consent"
										},
										type: "ifcss"
									},
									{
										target: {
											selector: "div",
											textFilter: [
												"Personalization"
											]
										},
										trueAction: {
											consents: [
												{
													matcher: {
														target: {
															selector: "input"
														},
														type: "checkbox"
													},
													toggleAction: {
														target: {
															selector: "label"
														},
														type: "click"
													},
													type: "F"
												}
											],
											type: "consent"
										},
										type: "ifcss"
									},
									{
										target: {
											selector: "div",
											textFilter: [
												"Ad selection, delivery, reporting"
											]
										},
										trueAction: {
											consents: [
												{
													matcher: {
														target: {
															selector: "input"
														},
														type: "checkbox"
													},
													toggleAction: {
														target: {
															selector: "label"
														},
														type: "click"
													},
													type: "F"
												}
											],
											type: "consent"
										},
										type: "ifcss"
									},
									{
										target: {
											selector: "div",
											textFilter: [
												"Content selection, delivery, reporting"
											]
										},
										trueAction: {
											consents: [
												{
													matcher: {
														target: {
															selector: "input"
														},
														type: "checkbox"
													},
													toggleAction: {
														target: {
															selector: "label"
														},
														type: "click"
													},
													type: "E"
												}
											],
											type: "consent"
										},
										type: "ifcss"
									},
									{
										target: {
											selector: "div",
											textFilter: [
												"Measurement"
											]
										},
										trueAction: {
											consents: [
												{
													matcher: {
														target: {
															selector: "input"
														},
														type: "checkbox"
													},
													toggleAction: {
														target: {
															selector: "label"
														},
														type: "click"
													},
													type: "B"
												}
											],
											type: "consent"
										},
										type: "ifcss"
									},
									{
										target: {
											selector: "div",
											textFilter: [
												"Other Partners"
											]
										},
										trueAction: {
											consents: [
												{
													matcher: {
														target: {
															selector: "input"
														},
														type: "checkbox"
													},
													toggleAction: {
														target: {
															selector: "label"
														},
														type: "click"
													},
													type: "X"
												}
											],
											type: "consent"
										},
										type: "ifcss"
									}
								],
								type: "list"
							},
							parent: {
								childFilter: {
									target: {
										selector: "input"
									}
								},
								selector: "[data-tracking-opt-in-overlay] > div > div"
							},
							target: {
								childFilter: {
									target: {
										selector: "input"
									}
								},
								selector: ":scope > div"
							},
							type: "foreach"
						}
					],
					type: "list"
				},
				name: "DO_CONSENT"
			},
			{
				action: {
					target: {
						selector: "[data-tracking-opt-in-overlay] [data-tracking-opt-in-save]"
					},
					type: "click"
				},
				name: "SAVE_CONSENT"
			}
		]
	},
	springer: {
		detectors: [
			{
				presentMatcher: {
					parent: null,
					target: {
						selector: ".cmp-app_gdpr"
					},
					type: "css"
				},
				showingMatcher: {
					parent: null,
					target: {
						displayFilter: true,
						selector: ".cmp-popup_popup"
					},
					type: "css"
				}
			}
		],
		methods: [
			{
				action: {
					actions: [
						{
							target: {
								selector: ".cmp-intro_rejectAll"
							},
							type: "click"
						},
						{
							type: "wait",
							waitTime: 250
						},
						{
							target: {
								selector: ".cmp-purposes_purposeItem:not(.cmp-purposes_selectedPurpose)"
							},
							type: "click"
						}
					],
					type: "list"
				},
				name: "OPEN_OPTIONS"
			},
			{
				action: {
					consents: [
						{
							matcher: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Przechowywanie informacji na urządzeniu lub dostęp do nich",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch .cmp-switch_isSelected"
								},
								type: "css"
							},
							toggleAction: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Przechowywanie informacji na urządzeniu lub dostęp do nich",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch:not(.cmp-switch_isSelected)"
								},
								type: "click"
							},
							type: "D"
						},
						{
							matcher: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Wybór podstawowych reklam",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch .cmp-switch_isSelected"
								},
								type: "css"
							},
							toggleAction: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Wybór podstawowych reklam",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch:not(.cmp-switch_isSelected)"
								},
								type: "click"
							},
							type: "F"
						},
						{
							matcher: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Tworzenie profilu spersonalizowanych reklam",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch .cmp-switch_isSelected"
								},
								type: "css"
							},
							toggleAction: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Tworzenie profilu spersonalizowanych reklam",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch:not(.cmp-switch_isSelected)"
								},
								type: "click"
							},
							type: "F"
						},
						{
							matcher: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Wybór spersonalizowanych reklam",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch .cmp-switch_isSelected"
								},
								type: "css"
							},
							toggleAction: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Wybór spersonalizowanych reklam",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch:not(.cmp-switch_isSelected)"
								},
								type: "click"
							},
							type: "E"
						},
						{
							matcher: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Tworzenie profilu spersonalizowanych treści",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch .cmp-switch_isSelected"
								},
								type: "css"
							},
							toggleAction: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Tworzenie profilu spersonalizowanych treści",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch:not(.cmp-switch_isSelected)"
								},
								type: "click"
							},
							type: "E"
						},
						{
							matcher: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Wybór spersonalizowanych treści",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch .cmp-switch_isSelected"
								},
								type: "css"
							},
							toggleAction: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Wybór spersonalizowanych treści",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch:not(.cmp-switch_isSelected)"
								},
								type: "click"
							},
							type: "B"
						},
						{
							matcher: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Pomiar wydajności reklam",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch .cmp-switch_isSelected"
								},
								type: "css"
							},
							toggleAction: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Pomiar wydajności reklam",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch:not(.cmp-switch_isSelected)"
								},
								type: "click"
							},
							type: "B"
						},
						{
							matcher: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Pomiar wydajności treści",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch .cmp-switch_isSelected"
								},
								type: "css"
							},
							toggleAction: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Pomiar wydajności treści",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch:not(.cmp-switch_isSelected)"
								},
								type: "click"
							},
							type: "B"
						},
						{
							matcher: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Stosowanie badań rynkowych w celu generowania opinii odbiorców",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch .cmp-switch_isSelected"
								},
								type: "css"
							},
							toggleAction: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Stosowanie badań rynkowych w celu generowania opinii odbiorców",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch:not(.cmp-switch_isSelected)"
								},
								type: "click"
							},
							type: "X"
						},
						{
							matcher: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Opracowywanie i ulepszanie produktów",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch .cmp-switch_isSelected"
								},
								type: "css"
							},
							toggleAction: {
								parent: {
									selector: ".cmp-purposes_detailHeader",
									textFilter: "Opracowywanie i ulepszanie produktów",
									childFilter: {
										target: {
											selector: ".cmp-switch_switch"
										}
									}
								},
								target: {
									selector: ".cmp-switch_switch:not(.cmp-switch_isSelected)"
								},
								type: "click"
							},
							type: "X"
						}
					],
					type: "consent"
				},
				name: "DO_CONSENT"
			},
			{
				action: {
					target: {
						selector: ".cmp-details_save"
					},
					type: "click"
				},
				name: "SAVE_CONSENT"
			}
		]
	},
	wordpressgdpr: {
		detectors: [
			{
				presentMatcher: {
					parent: null,
					target: {
						selector: ".wpgdprc-consent-bar"
					},
					type: "css"
				},
				showingMatcher: {
					parent: null,
					target: {
						displayFilter: true,
						selector: ".wpgdprc-consent-bar"
					},
					type: "css"
				}
			}
		],
		methods: [
			{
				action: {
					parent: null,
					target: {
						selector: ".wpgdprc-consent-bar .wpgdprc-consent-bar__settings",
						textFilter: null
					},
					type: "click"
				},
				name: "OPEN_OPTIONS"
			},
			{
				action: {
					actions: [
						{
							target: {
								selector: ".wpgdprc-consent-modal .wpgdprc-button",
								textFilter: "Eyeota"
							},
							type: "click"
						},
						{
							consents: [
								{
									description: "Eyeota Cookies",
									matcher: {
										parent: {
											selector: ".wpgdprc-consent-modal__description",
											textFilter: "Eyeota"
										},
										target: {
											selector: "input"
										},
										type: "checkbox"
									},
									toggleAction: {
										parent: {
											selector: ".wpgdprc-consent-modal__description",
											textFilter: "Eyeota"
										},
										target: {
											selector: "label"
										},
										type: "click"
									},
									type: "X"
								}
							],
							type: "consent"
						},
						{
							target: {
								selector: ".wpgdprc-consent-modal .wpgdprc-button",
								textFilter: "Advertising"
							},
							type: "click"
						},
						{
							consents: [
								{
									description: "Advertising Cookies",
									matcher: {
										parent: {
											selector: ".wpgdprc-consent-modal__description",
											textFilter: "Advertising"
										},
										target: {
											selector: "input"
										},
										type: "checkbox"
									},
									toggleAction: {
										parent: {
											selector: ".wpgdprc-consent-modal__description",
											textFilter: "Advertising"
										},
										target: {
											selector: "label"
										},
										type: "click"
									},
									type: "F"
								}
							],
							type: "consent"
						}
					],
					type: "list"
				},
				name: "DO_CONSENT"
			},
			{
				action: {
					parent: null,
					target: {
						selector: ".wpgdprc-button",
						textFilter: "Save my settings"
					},
					type: "click"
				},
				name: "SAVE_CONSENT"
			}
		]
	}
};
const rules = {
	autoconsent: autoconsent,
	consentomatic: consentomatic
};

export { autoconsent, consentomatic, rules as default };
