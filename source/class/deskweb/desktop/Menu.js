 /* ========================================================================

   Copyright:  

   License: All rigths reserved

   Authors:

======================================================================== */


qx.Class.define("deskweb.desktop.Menu",
{

   //extend :  qx.ui.menu.Menu,
   // extend :  qx.ui.popup.Popup,
   extend :  qx.ui.container.Composite,

   /* ========================================================================
      PROPERTIES
   ======================================================================== */

   properties :
   {

      /*
      @@@ :
         {
         init    : @@@,
         nullable: @@@,
         check   : "@@@",
         apply   : "_apply@@@",
         event   : "change@@@"
         },
      */
   parent :
      {
      init     : null,
      nullable : true,
      check    : "Object"
      },
   closed :
      {
      init    : true,
      nullable: false,
      check   : "Boolean"
      // apply   : "_applyC",
      // event   : "change@@@"
      },
   isClicked:
      {
      init    : false,
      nullable: false,
      check   : "Boolean"
      }


   }, //:properties



    /* ========================================================================
      CONSTRUCT
   ======================================================================== */

   construct : function(pParent, button)
   {
   this.base(arguments);

   this.setParent(pParent);


  //this.PgmSeparator = new qx.ui.menu.Separator();
   //this.add(this.PgmSeparator);
   
//    this.SettingsSeparator = new qx.ui.menu.Separator();
//    this.add(this.SettingsSeparator);
 //
   this.button = button;


   
   this.setLayout(new qx.ui.layout.Grow());
   this.setAllowGrowX(false);

   
   //this.addListener("appear", function(e){this.placeToWidget(button)},this);
   
   
   this.scroller = new qx.ui.container.Scroll();
   // this.scroller.set({width : 300, height : (qx.bom.Viewport.getHeight() - ((qx.bom.Viewport.getHeight() / 100) * 10))})
   this.scroller.set({width : 300, opacity:1});
   this.add(this.scroller);
   

   this.ct_Flow = new qx.ui.container.Composite(new qx.ui.layout.Flow(10, 10, "center"));
   //this.ct_Flow.set({opacity:1});
   this.scroller.add(this.ct_Flow);


   this.MAINMENU_Request();

  // this.heightPopupDft = 50; //hauteur par default du popup pour pouvoir creer element et recuperer dans le dom
   this.heightPopupDft = qx.bom.Viewport.getHeight(); //hauteur par default du popup pour pouvoir creer element et recuperer dans le dom

   this.setHeight(this.heightPopupDft);
   //this.setBackgroundColor("#dddddd");
   this.setDecorator("radiobutton-focused");
   this.setOpacity(0);
   //this.show();


   this.vistesseMenu = 300;

   },


   /* ========================================================================
      MEMBERS
   ======================================================================== */
   members :
   {

   // ------------------------------------      
   MAINMENU_Request : function()
      {
      if (!this.MAINMENU_Requester)
         {
         this.MAINMENU_Requester = new qx.io.request.Xhr(document.qsliDesktop.getDskServletContext(), "POST"); 
         this.MAINMENU_Requester.setParser("json");  
         this.MAINMENU_Requester.addListener("success", this.MAINMENU_Response, this);  
         }

      this.MAINMENU_Requester.setRequestData("funcid=menu_load");  //get menumain
      //this.MAINMENU_Requester.setRequestData("funcid=INF_get&filePath=menu/");  //get menumain
      
      
      this.MAINMENU_Requester.send();
      
      },

   // ------------------------------------
   MAINMENU_Response: function(e)
      {
      this.buildMainMenu(this.MAINMENU_Requester.getResponse().root,this);
      },

   // ------------------------------------
   MAINMENU_Error: function()
      {
      alert("can't load main menu");
    },      
      

 buildMainMenu : function(pcurLevel)
      {
      /*
      {
      "name": "arraytest",
      "icon": "",
      "version": "1.0",
      "type": "APP",
      "tooltip": "",
      "clazz": "sandbox",
      "recover": "",
      "loader": "",
      "path": ""
      },
      */
      
      
      this.hide = false;
      var arrayProduct  =[];
      //var curLevel = response.root;
      var curLevel = pcurLevel;
      
      var appBt      = null;
      var URLBt      = null;
      var subMenu    = null;
      var mnuBt      = null;
      var icon       = null;
      var bentry     = false;               
      var iHeightMnu = 0;

      //boucle qui rempli le tableau de product pour les sections
      var j=0;
      for (entry in curLevel)
         {
          bentry = true;
          if(j==0) //initialise la premiere valeur dans le tableau
            { 
               if(curLevel[entry].product) // si le product existe on le rajoute dans le tableau
                  {
                  arrayProduct.push(curLevel[entry].product);
                  j++;
                  }   
            }

          for(var i =0; i<=arrayProduct.length; i++) //boucle sur le tab des sections
            {
            if(curLevel[entry].product) // si le product existe
               {
               bentry = false; 
               if(curLevel[entry].product == arrayProduct[i] ) //si le product de l'appli == a un product deja existant on break
                  {
                  bentry = true;
                  break;
                  }   
               }
            
            }
          if(!bentry) //si la section n'existe pas dans le tableau on ajoute
            {
            arrayProduct.push(curLevel[entry].product);
            }
          
         } 

      var k =0; 
      for(k=0; k<arrayProduct.length; k++) //boucle sur le nb de section
         {
            var u=0;

            var lb = new qx.ui.basic.Label("");
            var Separator = new qx.ui.basic.Label("<div style=\"text-indent: 3%; color : #5E5E5E; border-width:0px 0px 1px 1px;    border-style:   solid;  border-color:   #969696;\"> "+ arrayProduct[k] + "</div>");
            Separator.setRich(true);
            Separator.setWidth(280);
            Separator.setHeight(30);

            iHeightMnu += Separator.getHeight();            


            this.ct_Flow.add(lb,{lineBreak: true});  
            this.ct_Flow.add(Separator,{lineBreak: true});  
            
            for(entry in curLevel) //boucle sur la liste des manifest
            {               
              
               if(curLevel[entry].product == arrayProduct[k] ) //si le product de l'appli == a la section en cour on ajouter dans la bonne section
               {
                  if(curLevel[entry].type != null )
                     {

                     if(curLevel[entry].icon) icon =  curLevel[entry].path + curLevel[entry].icon; else icon = "aka_idesktop/icon_default.png";
                     ItemBt = new qx.ui.basic.Atom("<center>" + curLevel[entry].appname.replace("_"," ") + "</center>",icon).set({iconPosition : "top", width : 80, height : 80});
                     ItemBt.getChildControl("icon").set({scale : true, maxWidth : document.qsliDesktop.getMnuIconSize(), maxHeight : document.qsliDesktop.getMnuIconSize(), minWidth : document.qsliDesktop.getMnuIconSize() , minHeight : document.qsliDesktop.getMnuIconSize()});
                     ItemBt.getChildControl("label").setRich(true);
                     ItemBt.getChildControl("label").setWrap(true);
                     // ItemBt.getChildControl("icon").setPadding(2,2,2,2);
                     ItemBt.setToolTipText(curLevel[entry].tooltip ? curLevel[entry].tooltip : "");
                     ItemBt.data = curLevel[entry];
                     ItemBt.data.name = entry;

                     ItemBt.setContextMenu(this.CreateCtxMenu(ItemBt));

                     ItemBt.addListener("click",this.ButtonClicked,this);

                     this.ct_Flow.add(ItemBt); 

                     if(u %3 ==0) //si on modulo de trois on ajoute la hauteur d'un icone car on rajoute une ligne
                        iHeightMnu += ItemBt.getHeight();

                     u++;
                     }

               }//fin si appli == section

            }//fin boucle manifest


         }// fin boucle sur section
      
      //taille du browser -30%
      var heightViewPort = (qx.bom.Viewport.getHeight() - (( 30/ 100) *qx.bom.Viewport.getHeight())); 
      this.heightMnu = null;
      if(iHeightMnu >= heightViewPort)//si le menu est plus grand que la taille du browser -30% on fixe sa taille
      {

         this.scroller.setHeight(heightViewPort);
         this.heightMnu = heightViewPort;
      }
      else
      {
         this.heightMnu = iHeightMnu;
         //this.scroller.setHeight(this.ct_Flow.getHeight());
      }

      },
          
   // ------------------------------------
   CreateCtxMenu : function(pBt)
      {
      var CtxMenu = new qx.ui.menu.Menu();
      CtxMenu.addListener("appear", function(e){this.setZIndex(10000009)});
      var btAddShort = new qx.ui.menu.Button(this.tr("Create Shortcut"));
      btAddShort.data = pBt.data;
      CtxMenu.add(btAddShort);
      btAddShort.addListener("execute",this.OnAddShortcut,this);
      


      if (pBt.data.type == "APP")
         {
         CtxMenu.addSeparator();
         var btUninst = new qx.ui.menu.Button(this.tr("Uninstall"));
         btUninst.btRef = pBt;
         CtxMenu.add(btUninst);
         btUninst.addListener("execute",this.OnUninstall,this);
         if(pBt.data.locked)
            btUninst.setEnabled(false);
         }

      //methode pour supprimer app
      return CtxMenu;
      },

   // ------------------------------------
  OnUninstall : function(e)
    {
    var bt = e.getTarget().btRef;
    
    var ConfirmUninstallBox = new modal_CheckReply();
      ConfirmUninstallBox.preset("<b>"+this.tr("Please type %1 in the box below to uninstall", "\"Delete\"")+ " " + bt.data.name + " <b>", "aka_status_128/dialog-error.png",this.UninstValidated, this, [this.tr("type %1 here...", "\"Delete\"")], [bt]);
      document.qsliDesktop.addWindow(ConfirmUninstallBox);
    
      },
      
   // ------------------------------------
   UninstValidated: function(pBt)
      {   
      pBt.getLayoutParent().remove(pBt);
      // this.UNINST_Request(pBt.data); 
      this.UNINSTALL_Request(pBt.data); 
      },
   // ------------------------------------      
   UNINSTALL_Request : function(pBtData)
      {
      if (!this.UNINSTALL_Requester)
         {
         this.UNINSTALL_Requester = new qx.io.request.Xhr(document.qsliDesktop.getDskServletContext(), "POST"); 
         this.UNINSTALL_Requester.setParser("json");  
         this.UNINSTALL_Requester.addListener("success", this.UNINSTALL_Response, this);  
         }

      this.UNINSTALL_Requester.setRequestData("funcid=DIR_dlt&filePath=" +  pBtData.path);  
      
      this.UNINSTALL_Requester.send();
      },

   // ------------------------------------
   UNINSTALL_Response: function(e)
      {
      },

   // ------------------------------------
   UNINSTALL_Error: function()
      {
      alert("error during delete");
    },      

   // ------------------------------------
  OnAddShortcut : function(e)
    {
    this.lastAppBtClicked = e.getTarget();

    document.qsliDesktop.dlkManager.WriteShortcut(this.lastAppBtClicked.data);
    // document.qsliDesktop.dlkManager.DLKREAD_Request(e.getTarget().data[0]);
    },
      
   // ------------------------------------
   ButtonClicked : function(e)
      {
      this.setVisibility("hidden");
      var btInfo = e.getTarget().data;
      document.qsliDesktop.mainStart(btInfo);
      },   
               
         
   // ------------------------------------  
   deploy : function(e)
      {
         var heightWin = Math.round(qx.bom.Viewport.getHeight()-this.heightMnu -this.getParent().taskBar.getHeight()  ); //45 hauteur taskbar
         
         if(this.getClosed())//le menu va s'animer en montant
         {
            var hautWinBrowser = qx.bom.Viewport.getHeight();
            var height = {duration: this.vistesseMenu,keyFrames : {
            0 : {top : (hautWinBrowser) , opacity : 0},
            100 : {top: heightWin+"px", opacity : 1}
            }};         
            this.setClosed(false);
            this.setIsClicked(true);
            var heightCtn = Math.round(this.heightMnu +this.getParent().taskBar.getHeight() +30); //la hauteur du container+30pour le remonter un peux au dessus de la taskBar


            //this.setHeight(heightCtn-this.getParent().taskBar.getHeight());
            this.setHeight(heightCtn); //
         }
         else  //le menu va s'animer en descendant
         {
            var height = {duration: this.vistesseMenu,keyFrames : {
            0 : {top: heightWin+"px", opacity : 1},
            100 : {top : (qx.bom.Viewport.getHeight()) , opacity : 0}
            }};         
            this.setClosed(true);
            this.setIsClicked(false);


            this.setHeight(qx.bom.Viewport.getHeight());
         }
         

      var elemContainer = this.getContainerElement();

      var elContainer = elemContainer.getDomElement();


      var anim = qx.bom.element.AnimationJs.animate(elContainer, height);
      anim.addListener("end",this.endAnim, this );
      


      //this.setHeight(null);

      },

   // ------------------------------------
   endAnim : function()
      { 
      if(this.getClosed()) //si le menu se ferme
         {
         this.setOpacity(0);
         this.setZIndex(0);
         }
      else //le menou s'ouvre
         {
         this.setOpacity(1);
         this.setZIndex(9999999999);
         }
         
      },
         
   // ------------------------------------  
   close : function()
      {
      if(this.getIsClicked()) //si le menu est open
         {
         var heightWin = Math.round(qx.bom.Viewport.getHeight()-this.heightMnu -this.getParent().taskBar.getHeight()  ); //45 hauteur taskbar

         var height = {duration: this.vistesseMenu,keyFrames : {
         0 : {top: heightWin+"px", opacity : 1},
         100 : {top : (qx.bom.Viewport.getHeight()) , opacity : 0}
         }};         
         this.setClosed(true);

         this.setHeight(qx.bom.Viewport.getHeight());

         var elemContainer = this.getContainerElement();

         var elContainer = elemContainer.getDomElement();


         var anim = qx.bom.element.AnimationJs.animate(elContainer, height);
         anim.addListener("end",this.endAnim, this );
         this.setIsClicked(false);
         }



      //this.setHeight(null);

      },


      
   // ------------------------------------
   dummy : function()
      { // Fonction fictive pour la virgule ^^
      }

  }
});


