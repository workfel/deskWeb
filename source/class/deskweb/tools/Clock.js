/* ========================================================================

   Copyright:  TRADER'S S.A., http://quick-software-line.com

   License: All rigths reserved

   Authors:

======================================================================== */

/* ========================================================================

======================================================================== */
qx.Class.define("deskweb.tools.Clock",
{

   extend :  qx.core.Object,

   /* ========================================================================
      PROPERTIES
   ======================================================================== */

   properties :
   {

     interval :
         {
         init    : 1000,
         nullable: false,
         check   : [1000, 60000],
         transform:"_transformInterval",
         apply   : "_applyInterval"
         },

     timFmt :
         {
         init    : "24",
         nullable: false,
         check   : ["24", "12"]
         },

     datFmt :
         {
         init    : "fr",
         nullable: false,
         check   : ["fr", "en"]   // FR=jj/mm/aaaa, EN=mm/dd/yyy
         },

     dattim :
         {
         init    : "",
         check   : "String",
         event   : "changeDattim"
         },

     time :
         {
         init    : "00:00:00",
         check   : "String",
         event   : "changeTime"
         },
         
     date :
         {
         init    : "jj/mm/yyyy",
         check   : "String",
         event   : "changeDate"
         }



   }, //:properties



    /* ========================================================================
      CONSTRUCT
   ======================================================================== */

   construct : function( element)
   {
   
   this.base(arguments);
   this.timerUID = null;
   this.timer = qx.util.TimerManager.getInstance();

   this.element = element;

   this.setInterval("s");

   this.timerTick();

   },


   /* ========================================================================
      MEMBERS
   ======================================================================== */
   members :
   {
   
   // ------------------------------------
   _transformInterval : function(value)
      {
      return value == "s" ? 1000 : 60000;
      },


   // ------------------------------------
   _applyInterval : function(value)
      {
      if (this.timerUID)
         this.timer.stop(this.timerUID);
      this.timerUID = this.timer.start(this.timerTick, value, this, null, 0);
      },



   // ------------------------------------
   timerTick: function()
      {
      
      var currentTime = new Date();
      
      var hours    = currentTime.getHours();
      var minutes  = currentTime.getMinutes();
      var secondes = currentTime.getSeconds();
      var mday     = currentTime.getDate();
      var month    = currentTime.getMonth()+1;
      var year4    = currentTime.getFullYear();
      
      if (hours    < 10)  hours    = "0" + hours
      if (minutes  < 10)  minutes  = "0" + minutes
      if (secondes < 10)  secondes = "0" + secondes

      if (mday     < 10)  mday     = "0" + mday
      if (month    < 10)  month    = "0" + month


      var weekday=new Array(7);
      weekday[0]="Sunday";
      weekday[1]="Monday";
      weekday[2]="Tuesday";
      weekday[3]="Wednesday";
      weekday[4]="Thursday";
      weekday[5]="Friday";
      weekday[6]="Saturday";

      var n = weekday[currentTime.getDay()];


      this.setTime(this.makeTime(hours, minutes, secondes));
      this.setDate(this.makeDate(mday, month, year4));
      //this.setDattim("<CENTER>"+this.getTime()+"<BR>"+this.getDate()+"</CENTER>");
      this.element.setValue("<span style='line-height:3; color:#000; '>" + n + " "+ this.getTime() + "</span>");
      },


   // ------------------------------------
   makeTime : function(h, m, s)
      {
      var tim = "";
      
      if (this.getInterval() == 1000)
         {
         
         if (this.getTimFmt() == "24")
            tim = h + ":" + m + ":" + s;

         if (this.getTimFmt() == "12")
            {
            if (h > 11)
               tim = h-12 + ":" + m + ":" + s + "PM";
            else
               tim = h    + ":" + m + ":" + s + "AM";
            }
         }
         
         
      if (this.getInterval() == 60000)
         {
         
         if (this.getTimFmt() == "24")
            tim = h + ":" + m;

         if (this.getTimFmt() == "12")
            {
            if (h > 11)
               tim = h-12 + ":" + m + "PM";
            else
               tim = h    + ":" + m + "AM";
            }

         }

      return tim;
      
      },



   // ------------------------------------
   makeDate : function(d, m, y)
      {
      var dat = "";
      
      if (this.getDatFmt() == "fr")
         dat = d + "/" + m + "/" + y;

      if (this.getDatFmt() == "en")
         dat = m + "/" + d + "/" + y;

      return dat;

      },




   // ------------------------------------
   dummy : function()
      { // Fonction fictive pour la virgule ^^
      }

  }
});


