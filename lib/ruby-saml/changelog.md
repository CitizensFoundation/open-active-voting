# RubySaml Changelog

### 1.3.1 (July 10, 2016)
* Fix response_test.rb of gem 1.3.0
* Add reference to Security Guidelines
* Update License
* [#334](https://github.com/onelogin/ruby-saml/pull/334) Keep API backward-compatibility on IdpMetadataParser fingerprint method. 

### 1.3.0 (June 24, 2016)
* [Security Fix](https://github.com/onelogin/ruby-saml/commit/a571f52171e6bfd87db59822d1d9e8c38fb3b995) Add extra validations to prevent Signature wrapping attacks
* Fix XMLSecurity SHA256 and SHA512 uris
* [#326](https://github.com/onelogin/ruby-saml/pull/326) Fix Destination validation

### 1.2.0 (April 29, 2016)
* [#269](https://github.com/onelogin/ruby-saml/pull/269) Refactor error handling; allow collect error messages when soft=true (normal validation stop after find first error)
* [#289](https://github.com/onelogin/ruby-saml/pull/289) Remove uuid gem in favor of SecureRandom
* [#297](https://github.com/onelogin/ruby-saml/pull/297) Implement EncryptedKey RetrievalMethod support
* [#298](https://github.com/onelogin/ruby-saml/pull/298) IDP metadata parsing improved: binding parsing, fingerprint_algorithm support)
* [#299](https://github.com/onelogin/ruby-saml/pull/299) Make 'signing' at KeyDescriptor optional
* [#308](https://github.com/onelogin/ruby-saml/pull/308) Support name_id_format on SAMLResponse
* [#315](https://github.com/onelogin/ruby-saml/pull/315) Support for canonicalization with comments
* [#316](https://github.com/onelogin/ruby-saml/pull/316) Fix Misspelling of transation_id to transaction_id
* [#321](https://github.com/onelogin/ruby-saml/pull/321) Support Attribute Names on IDPSSODescriptor parser
* Changes on empty URI of Signature reference management
* [#320](https://github.com/onelogin/ruby-saml/pull/320) Dont mutate document to fix lack of reference URI 
* [#306](https://github.com/onelogin/ruby-saml/pull/306) Support WantAssertionsSigned

### 1.1.2 (February 15, 2016)
* Improve signature validation. Add tests.
 [#302](https://github.com/onelogin/ruby-saml/pull/302) Add Destination validation.
* [#292](https://github.com/onelogin/ruby-saml/pull/292) Improve the error message when validating the audience.
* [#287](https://github.com/onelogin/ruby-saml/pull/287) Keep the extracted certificate when parsing IdP metadata.

### 1.1.1 (November 10, 2015)
* [#275](https://github.com/onelogin/ruby-saml/pull/275) Fix a bug on signature validations that invalidates valid SAML messages.

### 1.1.0 (October 27, 2015)
* [#273](https://github.com/onelogin/ruby-saml/pull/273) Support SAMLResponse without ds:x509certificate
* [#270](https://github.com/onelogin/ruby-saml/pull/270) Allow SAML elements to come from any namespace (at decryption process)
* [#261](https://github.com/onelogin/ruby-saml/pull/261) Allow validate_subject_confirmation Response validation to be skipped
* [#258](https://github.com/onelogin/ruby-saml/pull/258) Fix allowed_clock_drift on the validate_session_expiration test
* [#256](https://github.com/onelogin/ruby-saml/pull/256) Separate the create_authentication_xml_doc in two methods. 
* [#255](https://github.com/onelogin/ruby-saml/pull/255) Refactor validate signature.
* [#254](https://github.com/onelogin/ruby-saml/pull/254) Handle empty URI references 
* [#251](https://github.com/onelogin/ruby-saml/pull/251) Support qualified and unqualified NameID in attributes
* [#234](https://github.com/onelogin/ruby-saml/pull/234) Add explicit support for JRuby

### 1.0.0 (June 30, 2015)
* [#247](https://github.com/onelogin/ruby-saml/pull/247) Avoid entity expansion (XEE attacks)
* [#246](https://github.com/onelogin/ruby-saml/pull/246) Fix bug generating Logout Response (issuer was at wrong order)
* [#243](https://github.com/onelogin/ruby-saml/issues/243) and [#244](https://github.com/onelogin/ruby-saml/issues/244) Fix metadata builder errors. Fix metadata xsd.
* [#241](https://github.com/onelogin/ruby-saml/pull/241) Add decrypt support (EncryptID and EncryptedAssertion). Improve compatibility with namespaces. 
* [#240](https://github.com/onelogin/ruby-saml/pull/240) and [#238](https://github.com/onelogin/ruby-saml/pull/238) Improve test coverage and refactor.
* [#239](https://github.com/onelogin/ruby-saml/pull/239) Improve security: Add more validations to SAMLResponse, LogoutRequest and LogoutResponse. Refactor code and improve tests coverage.
* [#237](https://github.com/onelogin/ruby-saml/pull/237) Don't pretty print metadata by default.
* [#235](https://github.com/onelogin/ruby-saml/pull/235) Remove the soft parameter from validation methods. Now can be configured on the settings and each class read it and store as an attribute of the class. Adding some validations and refactor old ones.
* [#232](https://github.com/onelogin/ruby-saml/pull/232) Improve validations: Store the causes in the errors array, code refactor
* [#231](https://github.com/onelogin/ruby-saml/pull/231) Refactor HTTP-Redirect Sign method, Move test data to right folder
* [#226](https://github.com/onelogin/ruby-saml/pull/226) Ensure IdP certificate is formatted properly
* [#225](https://github.com/onelogin/ruby-saml/pull/225) Add documentation to several methods. Fix xpath injection on xml_security.rb
* [#223](https://github.com/onelogin/ruby-saml/pull/223) Allow logging to be delegated to an arbitrary Logger
* [#222](https://github.com/onelogin/ruby-saml/pull/222) No more silent failure fetching idp metadata (OneLogin::RubySaml::HttpError raised).

### 0.9.2 (Apr 28, 2015)
* [#216](https://github.com/onelogin/ruby-saml/pull/216) Add fingerprint algorithm support
* [#218](https://github.com/onelogin/ruby-saml/pull/218) Update README.md
* [#214](https://github.com/onelogin/ruby-saml/pull/214) Cleanup `SamlMessage` class
* [#213](https://github.com/onelogin/ruby-saml/pull/213) Add ability to sign metadata. (Improved)
* [#212](https://github.com/onelogin/ruby-saml/pull/212) Rename library entry point
* [#210](https://github.com/onelogin/ruby-saml/pull/210) Call assert in tests
* [#208](https://github.com/onelogin/ruby-saml/pull/208) Update tests and CI for Ruby 2.2.0
* [#205](https://github.com/onelogin/ruby-saml/pull/205) Allow requirement of single files
* [#204](https://github.com/onelogin/ruby-saml/pull/204) Require ‘net/http’ library
* [#201](https://github.com/onelogin/ruby-saml/pull/201) Freeze and duplicate default security settings hash so that it doesn't get modified.
* [#200](https://github.com/onelogin/ruby-saml/pull/200) Set default SSL certificate store in Ruby 1.8.
* [#199](https://github.com/onelogin/ruby-saml/pull/199) Change Nokogiri's runtime dependency to fix support for Ruby 1.8.7.
* [#179](https://github.com/onelogin/ruby-saml/pull/179) Add support for setting the entity ID and name ID format when parsing metadata
* [#175](https://github.com/onelogin/ruby-saml/pull/175) Introduce thread safety to SAML schema validation
* [#171](https://github.com/onelogin/ruby-saml/pull/171) Fix inconsistent results with using regex matches in decode_raw_saml

### 0.9.1 (Feb 10, 2015)
* [#194](https://github.com/onelogin/ruby-saml/pull/194) Relax nokogiri gem requirements
* [#191](https://github.com/onelogin/ruby-saml/pull/191) Use Minitest instead of Test::Unit

### 0.9 (Jan 26, 2015)
* [#169](https://github.com/onelogin/ruby-saml/pull/169) WantAssertionSigned should be either true or false
* [#167](https://github.com/onelogin/ruby-saml/pull/167) (doc update) make unit of clock drift obvious
* [#160](https://github.com/onelogin/ruby-saml/pull/160) Extended solution for Attributes method [] can raise NoMethodError
* [#158](https://github.com/onelogin/ruby-saml/pull/1) Added ability to specify attribute services in metadata
* [#154](https://github.com/onelogin/ruby-saml/pull/154) Fix incorrect gem declaration statement
* [#152](https://github.com/onelogin/ruby-saml/pull/152) Fix the PR #99
* [#150](https://github.com/onelogin/ruby-saml/pull/150) Nokogiri already in gemspec
* [#147](https://github.com/onelogin/ruby-saml/pull/147) Fix LogoutResponse issuer validation and implement SAML Response issuer validation.
* [#144](https://github.com/onelogin/ruby-saml/pull/144) Fix DigestMethod lookup bug
* [#139](https://github.com/onelogin/ruby-saml/pull/139) Fixes handling of some soft and hard validation failures
* [#138](https://github.com/onelogin/ruby-saml/pull/138) Change logoutrequest.rb to UTC time
* [#136](https://github.com/onelogin/ruby-saml/pull/136) Remote idp metadata
* [#135](https://github.com/onelogin/ruby-saml/pull/135) Restored support for NIL as well as empty AttributeValues
* [#134](https://github.com/onelogin/ruby-saml/pull/134) explicitly require "onelogin/ruby-saml/logging"
* [#133](https://github.com/onelogin/ruby-saml/pull/133) Added license to gemspec
* [#132](https://github.com/onelogin/ruby-saml/pull/132) Support AttributeConsumingServiceIndex in AuthnRequest
* [#131](https://github.com/onelogin/ruby-saml/pull/131) Add ruby 2.1.1 to .travis.yml
* [#122](https://github.com/onelogin/ruby-saml/pull/122) Fixes #112 and #117 in a backwards compatible manner
* [#119](https://github.com/onelogin/ruby-saml/pull/119) Add support for extracting IdP details from metadata xml

### 0.8.2 (Jan 26, 2015)
* [#183](https://github.com/onelogin/ruby-saml/pull/183) Resolved a security vulnerability where string interpolation in a `REXML::XPath.first()` method call allowed for arbitrary code execution.

### 0.8.0 (Feb 21, 2014)
**IMPORTANT**: This release changed namespace of the gem from `OneLogin::Saml` to `OneLogin::RubySaml`.  Please update your implementations of the gem accordingly.

* [#111](https://github.com/onelogin/ruby-saml/pull/111) `Onelogin::` is `OneLogin::`
* [#108](https://github.com/onelogin/ruby-saml/pull/108) Change namespacing from `Onelogin::Saml` to `Onelogin::Rubysaml`


### 0.7.3 (Feb 20, 2014)
Updated gem dependencies to be compatible with Ruby 1.8.7-p374 and 1.9.3-p448. Removed unnecessary `canonix` gem dependency.

* [#107](https://github.com/onelogin/ruby-saml/pull/107) Relax nokogiri version requirement to >= 1.5.0
* [#105](https://github.com/onelogin/ruby-saml/pull/105) Lock Gem versions, fix to resolve possible namespace collision
