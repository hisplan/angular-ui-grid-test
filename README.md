# `angular-ui-grid-test`

Cloned from [`hisplan/angular-seed`](https://github.com/hisplan/angular-seed).

Added Angular UI Grid:

```bash
bower install angular-ui-grid --save
```

Added `<script>` and `<link>` tag to `app/index.html`:

```javascript
<link rel="styleSheet" href="bower_components/angular-ui-grid/ui-grid.min.css" />
<script src="bower_components/angular-ui-grid/ui-grid.min.js"></script>
```

Added an example grid to `app/view1`:
- `app/view1/view1.html`
- `app/view1/view1.js`

Added the test helper functions:
- `e2e-tests/gridObjectTestUtils.spec.js`
- `e2e-tests/gridTestUtils.spec.js`

Added an exmaple end-to-end test code `e2e-tests/view1-grid.spec.js`.

## References

- **Angular UI Grid** : http://ui-grid.info/
- **Intro to UI-Grid** : http://ui-grid.info/docs/#/tutorial/101_intro
- **End-to-End Testing** : http://ui-grid.info/docs/#/tutorial/403_end_to_end_testing
- **End-to-End Test Helper Functions** : http://ui-grid.info/docs/#/api/ui.grid.e2eTestLibrary.api:gridTest

