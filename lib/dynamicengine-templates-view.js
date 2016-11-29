'use babel';


module.exports = {
  render : function() {
    return `
    <img class="va-white-logo" src="atom://dynamicengine-templates-tool/resources/VA_white.png" style="position:absolute;opacity:0.2;">
  <div style='padding:50px;margin:50px;'>

        <section class="section">
          <div class="section-container">
            <div class="section-heading" style="font-size: 1.75em;font-weight: bold;line-height: 1;-webkit-user-select: none;cursor: default;">
              <span class="icon icon-package">Dynamic Engine App Project Templates</span>
            </div>
          </div>
        </section>

        <div style="height:1px;background:#528bff;margin-top:15px;margin-bottom:10px;"></div>

        <atom-panel class='padded'>
          <div class="inset-panel">
            <div class="panel-body padded">
              <div class='block padded pull-right'>
                <div id="detemplates-status-1" style="display:none;">
                  <span class='loading loading-spinner-tiny inline-block'></span>
                  <span class="inline-block">Downloading...</span>
                </div>
                <button id="detemplates-btn-download-1" class='inline-block-tight btn btn-info'><span class="icon icon-cloud-download"></span></span>Download</button>
              </div>
              <span class="text-highlight"><h4>Simple AngularJS + IONIC Template with Side Menu</h4></span>
              <span>This sample project is based on AngularJS and Ionic Framework in a mono-view layout engine</span><br>
              <span class='text-subtle' id="detemplates-lbl-destfolder-1" style="margin-top: 5px;display:none;">Destination folder: -</span>
            </div>
          </div>
        </atom-panel>

        <atom-panel class='padded'>
          <div class="inset-panel">
            <div class="panel-body padded">
              <div class='block padded pull-right'>
                <div id="detemplates-status-2" style="display:none;">
                  <span class='loading loading-spinner-tiny inline-block'></span>
                  <span class="inline-block">Downloading...</span>
                </div>
                <button id="detemplates-btn-download-2" class='inline-block-tight btn btn-info'><span class="icon icon-cloud-download"></span></span>Download</button>
              </div>
              <span class="text-highlight"><h4>Card Control AngularJS + IONIC Template</h4></span>
              <span>Card control example in a mono-view layout engine based on AngularJS-Ionic</span><br>
              <span class='text-subtle' id="detemplates-lbl-destfolder-2" style="margin-top: 5px;display:none;">Destination folder: -</span>
            </div>
          </div>
        </atom-panel>

        <atom-panel class='padded'>
          <div class="inset-panel">
            <div class="panel-body padded">
              <div class='block padded pull-right'>
                <div id="detemplates-status-3" style="display:none;">
                  <span class='loading loading-spinner-tiny inline-block'></span>
                  <span class="inline-block">Downloading...</span>
                </div>
                <button id="detemplates-btn-download-3" class='inline-block-tight btn btn-info'><span class="icon icon-cloud-download"></span></span>Download</button>
              </div>
              <span class="text-highlight"><h4>Onsens ui 2 Reactjs mono-view Demo</h4></span>
              <span>Onsen UI React Components Kitchensink contains almost all components in Onsen UI as one application package.
                    The code in this example is transpiled using Babel and bundled with Browserify (see Dev script in package.json).</span><br>
              <span class='text-subtle' id="detemplates-lbl-destfolder-3" style="margin-top: 5px;display:none;">Destination folder: -</span>
            </div>
          </div>
        </atom-panel>

        <atom-panel class='padded'>
          <div class="inset-panel">
            <div class="panel-body padded">
              <div class='block padded pull-right'>
                <div id="detemplates-status-4" style="display:none;">
                  <span class='loading loading-spinner-tiny inline-block'></span>
                  <span class="inline-block">Downloading...</span>
                </div>
                <button id="detemplates-btn-download-4" class='inline-block-tight btn btn-info'><span class="icon icon-cloud-download"></span></span>Download</button>
              </div>
              <span class="text-highlight"><h4>Framework7 Multi-view demo </h4></span>
              <span> Kitchensink that shows a multi-view app with Dynamic-Engine and Framework7. N.B: multi-view doesn't support browser emulation. You can set debuggerUrl property
               in your Android/iOS project to connect the device to debugger and use live-reload from there.</span><br>
              <span class='text-subtle' id="detemplates-lbl-destfolder-4" style="margin-top: 5px;display:none;">Destination folder: -</span>
            </div>
          </div>
        </atom-panel>

    </div>






        <!--
        <atom-panel class='padded'>
          <div class="inset-panel">
            <div class="panel-heading"><span class='icon icon-file-directory'></span>Source Paths<span class='text-subtle'>&nbsp;&nbsp;(Drop from Workspace treeview)</span></div>
            <div class="panel-body padded">
              <div class='block'>
                <label>Root Assets Folder</label>
                <input id='derunsettings-txt-rootFolder' type='text' class='input-text native-key-bindings'  placeholder='Assets Root Folder'>
              </div>
              <div class='block'>
                <label>Index file</label>
                <input id='derunsettings-txt-indexFile' type='text' class='input-text native-key-bindings inline-block' placeholder='Index File'>
              </div>
              <div class='block'>
                <label>Server Mock Implementation</label>
                <input id='derunsettings-txt-serverMockImpl' type='text' class='input-text native-key-bindings' placeholder='Server Mock Implementation'>
              </div>
            </div>
          </div>
        </atom-panel>

        <atom-panel class='padded'>
          <div class="inset-panel">
            <div class="panel-heading"><span class='icon icon-settings'></span>Emulation Settings</div>
            <div class="panel-body padded">
              <div class='block'>
                <label class='input-label'><input id='derunsettings-tog-physicalDevice' class='input-toggle' type='checkbox' unchecked>Run on Physical Device</label>
              </div>
              <div class='block'>
                <div class='select-list popover-list'>
                  <label>Emulated device OS on browser</label>
                  <select id='derunsettings-sel-deviceOs' class='input-select'>
                    <option value="ios" selected>iOS</option>
                    <option value="android">Android</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </atom-panel>
        -->


`}

}
