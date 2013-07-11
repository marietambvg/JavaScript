var SliderControl = (function () {
  var Slider = {
    init: function(number, pictures) {
      if (pictures){
      this.pictures=pictures;
      }

      this.number=number;
    },

    addPicture:function(somePicture){
      if(!this.pictures){
        this.pictures=[];
      }
      this.pictures.push(somePicture);
      console.log(somePicture);
     return this.pictures;
    },

    render:function(){
      if (this.pictures.length>0) {
        var pictureHolder=document.getElementById("312");
        var docFrag=document.createDocumentFragment();
        for (var i = 0; i < this.number; i++) {
          var currentPicture=document.createElement("img");
          currentPicture.style.margin="10px";
          currentPicture.setAttribute("src",this.pictures[i].url);
        
          docFrag.appendChild(currentPicture);
        };

        pictureHolder.appendChild(docFrag);
      };
      return pictureHolder
      //show picture
    }

  };

  var Picture={
    init: function(title, url, position) {
      this.title = title;
      this.url = url;
      this.position=position;
      //return this;
    },

    movePictureRight: function() {
        //make move picture in center
    },

    movePictureLeft: function(){
      
    },

    showPicture:function(){
      //make some borders
    }
  };


  var LargePicture = Picture.extend({
      init: function (title,url, largeUrl) {
      Picture.init.apply(this,arguments);
      this.largeUrl = largerl;
      return this;
    },

    getGrade: function() {
      return this.grade;
    },

    introduce: function() {
      return Person.introduce.apply(this) + " Grade: "+ this.grade ;
    }
  });

  return{
    //Slider:Object.create(Slider),
    //GetPicture:Object.create(Picture)
    Slider:  Object.create(Slider),
        
    Picture: Object.create(Picture),
    }
  

}());

var picture1=SliderControl.Picture;
picture1.init("picture0","images/picture0.jpg");
var picture2=SliderControl.Picture;
picture2.init("picture1","images/picture1.jpg");
var picture3=SliderControl.Picture;
picture3.init("picture2","images/picture2.jpg");
var picture4=SliderControl.Picture;
picture4.init("picture3","images/picture3.jpg");
var slider=SliderControl.Slider;
slider.init(3);
slider.addPicture(picture1);
slider.addPicture(picture2);
slider.addPicture(picture3);
slider.addPicture(picture4);
slider.render();


console.log(slider.pictures.length);