/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "deskWeb"
 *
 * @asset(deskweb/*)
 */
qx.Class.define("deskweb.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }




        qx.util.AliasManager.getInstance().add("aka_deskweb"   , "resource/deskweb"                );
        qx.util.AliasManager.getInstance().add("aka_deskweb_16"   , "resource/deskweb/16"                );

      // Chargement du paquet pour la configuration locale
      var currentLanguage = qx.locale.Manager.getInstance().getLanguage();
      var knownParts = qx.Part.getInstance().getParts();


    // Si la variable locale est disponible comme paquet
      if (knownParts[currentLanguage]) {
        // Charge le paquet
        qx.io.PartLoader.require([currentLanguage], function() {
          // Force l'application à avoir la même variable locale
          qx.locale.Manager.getInstance().setLocale(currentLanguage);
          // Crée le GUI une fois le paquet chargé
          

          this.make_ui();
        }, this);
      } else {
        // Si pas de paquet correspondant à la variable locale
        // Ecrire un warning et chargement du GUI
        this.warn(
          "Impossible de charger le paquet pour le langage courent " + 
          currentLanguage + ", retour à l'anglais."
        );
        this.make_ui();
      }


    },

    make_ui : function ()
    {

      // Create main layout
      var dockLayout = new qx.ui.layout.Dock();
      dockLayout.setSeparatorY("separator-vertical");
      var dockLayoutComposite = new qx.ui.container.Composite(dockLayout);
      this.getRoot().add(dockLayoutComposite, {edge:0});

      // Create header
      this.__header = new deskweb.desktop.Header(this);
      dockLayoutComposite.add(this.__header, {edge: "north"});

      // Create desktop
      var winManager = new qx.ui.window.Manager();
      this.__desktop = new qx.ui.window.Desktop(winManager);
      dockLayoutComposite.add(this.__desktop, {edge: "north", flex : 1});

      
      //qx.util.AliasManager.getInstance().add("aka_deskweb_32"   , "resource/deskweb/32"                );


      var doc = this.getRoot();


      var bg = new deskweb.desktop.Background("deskweb/background.png");

   
      this.__desktop.add(bg.getImage());
      
    }
  }
});
