'use babel';

/**
 * Vipera Dynamic Engine Templates Tool plugin for ATOM
 */

/**
import logger from './loggers/logger'
import DEDebugger from './DEDebugger';
import DeviceInfo from './DeviceInfo'
import ConsoleHandler from './loggers/ConsoleHandler'
import MotifConnector from './connectors/MotifConnector'
import Config from './Config'
import EventBus from './events/DebuggerEventBus'
var exec = require('child_process').exec;
**/

import { CompositeDisposable } from 'atom';


const Pane = require('atom-quick-pane');

export default {

  templatesPane: undefined,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();
    // subscribe all debugger actions
    this.subscribeActions();
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
  },

  subscribeActions() {
    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'dynamicengine-templates-tool:toggle': () => this.showTemplatesPane()
    }));
  },

  testGit(){

    /**
    remote = require("remote");
    remote.dialog.showOpenDialog({properties:['openDirectory']}, function(value){
      alert(value);
    });
    **/

    /**
    console.log("testGit called!");
    var workingDirPath = "/Users/marcobonati/Develop/temp/test_git_atom";
    var simpleGit = require('simple-git')();
    console.log("simpleGit created " + simpleGit);

    var repoPath = "https://gitlab.vipera.com/dynamic-engine-team/de_template_angularjsionicsimple.git";
    var localPath = workingDirPath;
    var gitOptions = {};
    simpleGit.clone(repoPath, localPath, gitOptions, function(err, data){
      console.log("completed err="+ err + " data="+ data);
      alert("completed err="+ err + " data="+ data);
    });
    **/
  },

  showTemplatesPane(){
    var that = this;

    //check if already opened
    if (that.templatesPane){
      //already opened, do nothing
      return;
    }

    var TemplatesView = require("./dynamicengine-templates-view.js");

      var panePromise = Pane({
        element: 'div',
        title: 'Dynamic Engine Project Templates',
        split: 'center',
        activatePane: true
      }, function (err, div) {
        if (err) throw err
        div.innerHTML = TemplatesView.render();
        that.templatesPane = div;

        that.setupPaneUI(div);

      }, function () {
        // clean up any event listeners or other resources here
        that.templatesPane = undefined;
      });
      panePromise.then(function(value){
      });
  },

  setupPaneUI(element){
    var that = this;
    that.setupButtons();
  },

  setupButtons(){
    this.setupButton('1');
  },

  setupButton(id){
    var that = this;
    document.getElementById('detemplates-btn-download-' + id).addEventListener("click", function(event){
      that.downloadTemplate( {
          "id" : id,
          "repoUrl": "https://gitlab.vipera.com/dynamic-engine-team/de_template_angularjsionicsimple.git",
          "prjName" : "de_template_angularjsionicsimple"
        });
    });
  },

  downloadTemplate(options){
      var that = this;

      console.log("testGit called!");
      var simpleGit = require('simple-git')();
      console.log("simpleGit created " + simpleGit);

      var repoPath = options.repoUrl;
      var gitOptions = {};

      remote = require("remote");
      remote.dialog.showOpenDialog({ title: 'Select destination folder', properties:['openDirectory','createDirectory'] }, function(folder){
        if (folder && folder.length>0){
          that.toggleDownloadStatus(options.id, true);
          var destFolder = folder + "/" + options.prjName;
          document.getElementById('detemplates-lbl-destfolder-' + options.id).innerHTML = "Destination folder: " + destFolder;
          simpleGit.clone(repoPath, destFolder, gitOptions, (err, data) => {
            if (err){
              atom.notifications.addError(err);
            } else {
              atom.open({'pathsToOpen': [destFolder], '.newWindow': true});
              atom.notifications.addInfo("Project donwloaded successfully.");
            }
            that.toggleDownloadStatus(options.id, false);
          });
          that.toggleDownloadStatus(options.id, false);
        }
      });


  },

  toggleDownloadStatus(id, isDownloading){
    //Toggle status
    if (isDownloading){
      document.getElementById('detemplates-btn-download-' + id).style.display = "none";
      document.getElementById('detemplates-status-' + id).style.display = "inline";
      document.getElementById('detemplates-lbl-destfolder-' + id).style.display = "inline";
    } else {
      document.getElementById('detemplates-status-' + id).style.display = "none";
      document.getElementById('detemplates-btn-download-' + id).style.display = "inline";
      document.getElementById('detemplates-lbl-destfolder-' + id).style.display = "none";
    }
  }


};
