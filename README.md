# Note app using NodeJS

## Introduction

This is a command line Notes taking app that is built using NodeJs. You can Add, Remove, List and Read Notes.
**Note:** All Notes data will be store on notes.json file

## Install
You need to have NodeJS installed in order to run this application
After that run this codes in the terminal

```
$ npm i
```

## How to use ?

### For adding notes
To add notes, You need to provide add as arguments and title and body with their property, that you wants to add.
Example:
```\
node app.js add --title="note title --body="body of your notes"
```

### For removeing notes
To remove notes, You need to provide remove as arguments and title with their property, that you wants to remove.
Example:
```
node app.js remove --title="note title"
```

### For listing notes
To list notes, You just need to provide list as arguments.
Example:
```
node app.js list
```

### For reading notes
To read notes, You need to provide read as arguments and title with their property, that you wants to read.
Example:
```
node app.js read --title="note title"
```

