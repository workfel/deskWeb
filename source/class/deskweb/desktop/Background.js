/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "deskWeb"
 *
 * 
 */
qx.Class.define("deskweb.desktop.Background",
{
  extend : qx.ui.basic.Image,



  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

//----------------------------------------
  construct : function(path)
  {
      this.path = path;

  },


  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    getImage : function ()
    {
      var bg = new qx.ui.basic.Image(this.path);
      bg.setScale(true);
      bg.setWidth(qx.bom.Viewport.getWidth());
      bg.setHeight(qx.bom.Viewport.getHeight());

      return bg;
    }

  }
});
