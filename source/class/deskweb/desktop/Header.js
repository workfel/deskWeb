/* ************************************************************************

   workfel

   http://workfel.fr

   Copyright:
     2013 workfel

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     PUJOL Johan

************************************************************************ */

/**
 * The Application's header
 */

qx.Class.define("deskweb.desktop.Header",
{
  extend : qx.ui.container.Composite,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

//----------------------------------------
  construct : function(pParent)
  {
    this.base(arguments);

    this.make_ui();

    this.pParent = pParent;
  },

members : 
{

//----------------------------------------
  make_ui : function()
  {

    this.setLayout(new qx.ui.layout.HBox(5));
    //this.setAppearance("app-header");
    this.setBackgroundColor("#eee");
    this.setMaxHeight(40);
    this.setMinHeight(40);

    var client = new qx.ui.form.Button(this.tr("Clients"), "deskweb/test.png");
    client.setBackgroundColor("#eee");
    client.setDecorator(null);

    var client32 = new qx.ui.form.Button(this.tr("Agenda"), "deskweb/test.png");
    client32.setBackgroundColor("#eee");    
    client32.setDecorator(null);

    this.make_menuLanguage();

    this.menuLangue= new qx.ui.form.MenuButton(null, "aka_deskweb_16/flag_"+qx.locale.Manager.getInstance().getLocale() + ".png", this.menuLanguage);
    this.menuLangue.setDecorator(null);
    //this.menuLangue.setBackgroundColor("#eee");


    this.btHeure = new qx.ui.basic.Label("12:05").set({rich: true});
    this.clock = new deskweb.tools.Clock(this.btHeure);


    this.make_menuUser();
    this.menuUser= new qx.ui.form.MenuButton("Username", "aka_deskweb_16/clients.png", this.listMenuUser);
    //this.menuUser.setBackgroundColor("#eee");
    this.menuUser.setDecorator(null);

    //Listener
    this.menuLangue.addListener("click", this.onChangeLanguage, this);
    this.menuUser.addListener("click", this.onChangeMenuUser, this);


    this.add(client);
    this.add(client32);
    this.add(new qx.ui.core.Spacer, {flex : 1});
    this.add(this.menuLangue);
    this.add(this.btHeure);
    this.add(this.menuUser);




  },
//----------------------------------------
  onClickClient : function()
  {
    //if(!this.appClien)
    //{

      this.pParent.ctstack_main.setSelection([this.pParent.ctstack_main.getChildren()[0]]);
      //this.appClien = new webdesk.tools.clients.Clients();
   //}
      //this.pParent.ctstack_main.add(this.appClien,{top:0 , left:0 , bottom:0, right:0});
    
    
  },
//----------------------------------------
  onClickClient32 : function()
  {
   // if(!this.appClien2)
    //{
      //this.appClien2 = new webdesk.tools.clients.Clients2();
    //}
      //this.pParent.ctstack_main.add(this.appClien2,{top:0 , left:0 , bottom:0, right:0});
      this.pParent.ctstack_main.setSelection([this.pParent.ctstack_main.getChildren()[1]]);
    
  },
//----------------------------------------
  make_menuLanguage : function()
  {

      // create main menu and buttons
      this.menuLanguage = new qx.ui.menu.Menu();

      var fr = new qx.ui.menu.Button(null, "aka_deskweb_16/flag_fr.png");
      var en = new qx.ui.menu.Button(null, "aka_deskweb_16/flag_en.png");
      var de = new qx.ui.menu.Button(null, "aka_deskweb_16/flag_de.png");

      fr.addListener("execute", function(){this.onChangeLanguage("fr")}, this);
      en.addListener("execute", function(){this.onChangeLanguage("en")}, this);
      de.addListener("execute", function(){this.onChangeLanguage("de")}, this);

      // add buttons to menu
      this.menuLanguage.add(fr);
      this.menuLanguage.add(en);
      this.menuLanguage.add(de);
  },
//----------------------------------------
  make_menuUser : function()
  {

      // create main menu and buttons
      this.listMenuUser = new qx.ui.menu.Menu();

      var disco = new qx.ui.menu.Button(this.tr("Disconnect"));
      var none = new qx.ui.menu.Button(this.tr("None"));

      disco.addListener("execute", function(){this.onChangeMenuUser("disconnect")}, this);
      none.addListener("execute", function(){this.onChangeMenuUser("none")}, this);

      // add buttons to menu
      this.listMenuUser.add(disco);
      this.listMenuUser.add(none);
  },




onChangeLanguage : function(langue)
  {
    if(langue == "en" || langue == "de" || langue == "fr" )
    {
        qx.locale.Manager.getInstance().setLocale(langue);
        this.menuLangue.setIcon("aka_deskweb_16/flag_"+langue+".png")
    }
      
  },


onChangeMenuUser : function(user)
  {

    if(user == "disconnect" || user == "none")
    {
        if(user == "disconnect")
        {
          alert("Tu va etre déconecter");
        }
    }
       
  }

}
});