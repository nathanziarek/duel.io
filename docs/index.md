# Form Elements

Form elements are foo and bar...

## Rules of the Road

* All ```<label>```s must have a *for* attribute that references the appropriate ```<input>```
   ```html
   <label for="foo">Foo</label>
   <input id="foo" name="foo" />
   ```
   
* All ```<input>```s must have *id*, *name*, and *taborder* attributes.

## Structure

### Form Element

The general HTML for a form element should look like this:

```html
<div class="form-element">
    <label for="username">User Name</label>
    <input type="text" id="username" name="username" taborder="1" required />
</div>
```

### Form Groups

If there is a need to group elements in a form, use the ```<div class='form-group'>``` element around the ```.form-element```(s). (Note: ```<legend>``` is not supported.)

```html
<div class='form-group'>
    <div class="form-element">
        <label for="corpcode">Corp Code</label>
        <input type="text" id="corpcode" name="corpcode" taborder="1" required />
    </div>
    <div class="form-element">
        <label for="username">User Name</label>
        <input type="text" id="username" name="username" taborder="2" required />
    </div>
</div>
```

The items within a form group will grow and shrink to the available size. If there is a need to specify a relative size, you can use the ```.x-quarter``` and ```.x-half``` modifier classes. Any elements without these classes will automatically size to fit the remaining space.

```html
<div class='form-group'>
    <div class="form-element x-half">
        <label for="half">Half</label>
        <input type="text" id="half" name="half" taborder="1" required />
    </div>
    <div class="form-element">
        <label for="foo">Foo</label>
        <input type="text" id="foo" name="foo" taborder="2" />
    </div>
    <div class="form-element x-quarter">
        <label for="quarter">Quarter</label>
        <input type="text" id="quarter" name="quarter" taborder="3" />
    </div>
    <div class="form-element">
        <label for="bar">Bar</label>
        <input type="text" id="bar" name="bar" taborder="4" required />
    </div>
</div>
```

You can mix-and-match form elements and form groups.

```html
<div class='form-group'>
    <div class="form-element">
        <label for="corpcode">Corp Code</label>
        <input type="text" id="corpcode" name="corpcode" taborder="1" required />
    </div>
    <div class="form-element">
        <label for="username">User Name</label>
        <input type="text" id="username" name="username" taborder="2" required />
    </div>
</div>
<div class="form-element">
    <label for="Password">Password</label>
    <input type="password" id="password" name="password" taborder="3" required />
</div>
```

## Supported Input Types

* Text
   ```html
   <input type="text" id="corpcode" name="corpcode" taborder="1" />
   ```
    
* Password
   ```html
   <input type="password" id="password" name="password" taborder="1" />
   ```