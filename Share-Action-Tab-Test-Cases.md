# Share - Action Tab Test Cases

## Functional Test Cases

### "Share" Button

- Share dialog should be displayed when clicking on "Share" button
- Share dialog should include enough components: "Copy to clipboard", "Customise share settings", "Social Network Button"
- Share button should be highlighted with red underline when it is focused
- After clicking share tab, user should still be able to move between tabs
- User is able to share multiple times across multiple social networks without error
- Loading indicators appear when generating share URLs
- After sharing successfully:
  - Shortened URL (w3w.co format) redirects properly
  - Original 3-word address is preserved after redirect
  - Map loads at correct location coordinates
  - Location details display accurately

### Copy to Clipboard

- Text should display correctly what will be copied
- User is unable to "edit" preview text
- User is able to paste the same content as displayed
- Text should have correct URL as the current location
- Copy button should be clickable
- "Copied" text should appear when clicking on copy button
- "Copied" text should disappear after a while

### Customise Share Settings

- Should open Share Settings menu when clicking
- Share Settings should include enough settings: Web Address, 3 Word Address, Explainer Text, Latitude & Longitude, Share in another Language
- Copy preview dialog should be displayed and work as normal copy to clipboard function
- All settings should be independent (the toggles can be on/off regardless of others) → we should have many combinations of settings → it will still work
- Clipboard preview text should reflect enough information for all "ON" toggles
- Back button works → user navigated back to share dialog
- When user clicks back button, the copy preview text should be changed to match the text seen from "Share Settings"

#### Setting Options:

**Web Address:**

- User is able to toggle on/off → web address should appear/disappear on copy preview text

**3 Word Address:**

- User is able to toggle on/off → 3 word address should appear/disappear on copy preview text
- If "Share in another language" setting is not equal to "English", when this option is on → 3 word address should appear in 2 languages on copy preview text

**Explainer Text:**

- User is able to toggle on/off → explainer text should appear/disappear on copy preview text

**Latitude & Longitude:**

- User is able to toggle on/off → Latitude & Longitude should appear/disappear on copy preview text
- User is able to click on Latitude & Longitude setting and it will open options dialog
- Back button of this dialog should work → user navigated back to "Share Settings"
- All options should be checkable and independent
- Latitude & Longitude should be displayed in preview copy text as per settings, in case of combination settings it still works
- All coordinates displayed should be reversed when clicking into Reverse toggle and vice versa

**Share in Another Language:**

- User is able to toggle on/off
  - ON: 3 Word Address/URL should be shown in this language + English
  - OFF: 3 Word Address/URL should not be shown in this language, but English should still be there if we previously turned on "Web Address" or "3 Word Address"
- User is able to click on language change options → language changing menu is shown
- User is able to click on a language option → Language option radio button is checked
- User is able to click back → Back to "Share Settings"
- When user clicks back with a new language option checked, language button should be shown as the selected language, copy preview text is changed accordingly to new language

### Social Media Share Buttons

- User is able to click any button icon and it will open a new tab according to this social network
- Text which is shared should have the same content as copy preview text
- User is able to click on linked share on each platform and be redirected to correct URL

**WhatsApp:**

- WhatsApp opens with pre-filled message containing w3w.co URL
- URL is properly encoded for WhatsApp API

**Facebook:**

- Facebook share dialog opens correctly
- Location preview generates with proper formatting

**SMS:**

- SMS app opens on mobile devices

**Open in the App:**

- On mobile: the button should not appear
- On web: should show the instruction, and the instruction + QR code should work correctly

**Network Error Handling:**

- Timeout/Crashing from target app (e.g., WhatsApp not responding) → app should handle gracefully and return user to what3words

## UI/UX Test Cases

### Visual Consistency

- Proper language displayed in different locations
- All clickable elements should look clickable (hovering animation)
- All spelling is correct
- All grammar is correct
- Consistent icon design across all platforms
- Proper What3Words branding and colors maintained
- Consistent button sizes and spacing

### Responsive Design

- Share interface adapts to different screen sizes
- All buttons remain accessible on mobile devices
- Text remains readable across all device types

## Cross-Platform Test Cases

### Browser Compatibility

- Share interface displays correctly in Chrome, Firefox, Safari, Edge
- Platform integrations work consistently across browsers
- URL generation remains consistent
- No JavaScript errors appear in browser console

## Security Test Cases

### Security Validation

- No injection vulnerabilities present in shared URLs
- Proper input sanitization implemented (e.g., Hacker tries to change the sharing text then it should be sanitized on server)
- No sensitive data exposed in shared content

## Analytics Test Cases

### Google Tag Manager Integration

- GTM events fire correctly for each share platform (whatsapp, facebook, twitter, email, sms)
- Event structure includes proper eventCategory: "Share", eventAction: platform name, eventLabel: location
- All share clicks generate unique GTM event IDs for tracking

### Hotjar Session Recording

- User interactions with share interface are recorded for UX analysis
- Share button clicks and platform selections are captured
- No sensitive data exposed in session recordings
