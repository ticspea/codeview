//***************** Exercicio 1 /

function FocusAButton(){
	if (document.getElementById('CheckButton1') != null){
		document.getElementById('CheckButton1').focus();
	}
	else{
		if (document.getElementById('CheckButton2') != null){
			document.getElementById('CheckButton2').focus();
		}
		else{
			document.getElementsByTagName('button')[0].focus();
		}
	}
}




//CODE FOR HANDLING DISPLAY OF POPUP FEEDBACK BOX

var topZ = 1000;

function ShowMessage(Feedback){
	var Output = Feedback + '<br /><br />';
	document.getElementById('FeedbackContent').innerHTML = Output;
	var FDiv = document.getElementById('FeedbackDiv');
	topZ++;
	FDiv.style.zIndex = topZ;
	FDiv.style.top = TopSettingWithScrollOffset(30) + 'px';

	FDiv.style.display = 'block';

	ShowElements(false, 'input');
	ShowElements(false, 'select');
	ShowElements(false, 'object');
	ShowElements(true, 'object', 'FeedbackContent');

//Focus the OK button
	setTimeout("document.getElementById('FeedbackOKButton').focus()", 50);
	
//
}

function ShowElements(Show, TagName, ContainerToReverse){
// added third argument to allow objects in the feedback box to appear
//IE bug -- hide all the form elements that will show through the popup
//FF on Mac bug : doesn't redisplay objects whose visibility is set to visible
//unless the object's display property is changed

	//get container object (by Id passed in, or use document otherwise)
	TopNode = document.getElementById(ContainerToReverse);
	var Els;
	if (TopNode != null) {
		Els = TopNode.getElementsByTagName(TagName);
	} else {
		Els = document.getElementsByTagName(TagName);
	}

	for (var i=0; i<Els.length; i++){
		if (TagName == "object") {
			//manipulate object elements in all browsers
			if (Show == true){
				Els[i].style.visibility = 'visible';
			}
			else{
				Els[i].style.visibility = 'hidden';
			}
		} 
	}
}



function HideFeedback(){
	document.getElementById('FeedbackDiv').style.display = 'none';
	ShowElements(true, 'input');
	ShowElements(true, 'select');
	ShowElements(true, 'object');
}


//GENERAL UTILITY FUNCTIONS AND VARIABLES

//PAGE DIMENSION FUNCTIONS
function PageDim(){
//Get the page width and height
	this.W = 600;
	this.H = 400;
	this.W = document.getElementsByTagName('body')[0].offsetWidth;
	this.H = document.getElementsByTagName('body')[0].offsetHeight;
}

var pg = null;

function GetPageXY(El) {
	var XY = {x: 0, y: 0};
	while(El){
		XY.x += El.offsetLeft;
		XY.y += El.offsetTop;
		El = El.offsetParent;
	}
	return XY;
}

function GetScrollTop(){
	if (typeof(window.pageYOffset) == 'number'){
		return window.pageYOffset;
	}
	else{
		if ((document.body)&&(document.body.scrollTop)){
			return document.body.scrollTop;
		}
		else{
			if ((document.documentElement)&&(document.documentElement.scrollTop)){
				return document.documentElement.scrollTop;
			}
			else{
				return 0;
			}
		}
	}
}

function GetViewportHeight(){
	if (typeof window.innerHeight != 'undefined'){
		return window.innerHeight;
	}
	else{
		if (((typeof document.documentElement != 'undefined')&&(typeof document.documentElement.clientHeight !=
     'undefined'))&&(document.documentElement.clientHeight != 0)){
			return document.documentElement.clientHeight;
		}
		else{
			return document.getElementsByTagName('body')[0].clientHeight;
		}
	}
}

function TopSettingWithScrollOffset(TopPercent){
	var T = Math.floor(GetViewportHeight() * (TopPercent/100));
	return GetScrollTop() + T; 
}

//CODE FOR AVOIDING LOSS OF DATA WHEN BACKSPACE KEY INVOKES history.back()
var InTextBox = false;

function SuppressBackspace(e){ 
	if (InTextBox == true){return;}
	thisKey = e.keyCode;

	var Suppress = false;

	if (thisKey == 8) {
		Suppress = true;
		e.preventDefault();
	}
}

window.addEventListener('keypress',SuppressBackspace,false);

function ReduceItems(InArray, ReduceToSize){
	var ItemToDump=0;
	var j=0;
	while (InArray.length > ReduceToSize){
		ItemToDump = Math.floor(InArray.length*Math.random());
		InArray.splice(ItemToDump, 1);
	}
}

function Shuffle(InArray){
	var Num;
	var Temp = new Array();
	var Len = InArray.length;

	var j = Len;

	for (var i=0; i<Len; i++){
		Temp[i] = InArray[i];
	}

	for (i=0; i<Len; i++){
		Num = Math.floor(j  *  Math.random());
		InArray[i] = Temp[Num];

		for (var k=Num; k < (j-1); k++) {
			Temp[k] = Temp[k+1];
		}
		j--;
	}
	return InArray;
}

function WriteToInstructions(Feedback) {
	document.getElementById('InstructionsDiv').innerHTML = Feedback;

}




function EscapeDoubleQuotes(InString){
	return InString.replace(/"/g, '&quot;')
}

function TrimString(InString){
        var x = 0;

        if (InString.length != 0) {
                while ((InString.charAt(InString.length - 1) == '\u0020') || (InString.charAt(InString.length - 1) == '\u000A') || (InString.charAt(InString.length - 1) == '\u000D')){
                        InString = InString.substring(0, InString.length - 1)
                }

                while ((InString.charAt(0) == '\u0020') || (InString.charAt(0) == '\u000A') || (InString.charAt(0) == '\u000D')){
                        InString = InString.substring(1, InString.length)
                }

                while (InString.indexOf('  ') != -1) {
                        x = InString.indexOf('  ')
                        InString = InString.substring(0, x) + InString.substring(x+1, InString.length)
                 }

                return InString;
        }

        else {
                return '';
        }
}

function FindLongest(InArray){
	if (InArray.length < 1){return -1;}

	var Longest = 0;
	for (var i=1; i<InArray.length; i++){
		if (InArray[i].length > InArray[Longest].length){
			Longest = i;
		}
	}
	return Longest;
}

//SELECTION OBJECT FOR TYPING WITH KEYPAD
var selObj = null;
            
SelObj = function(box){
	this.box = box;
	this.selStart = this.box.selectionStart;
	this.selEnd = this.box.selectionEnd;
	this.selText = this.box.value.substring(this.selStart, this.selEnd);
	return this;
}

function setSelText(newText){
	var caretPos = this.selStart + newText.length;
	var newValue = this.box.value.substring(0, this.selStart);
	newValue += newText;
	newValue += this.box.value.substring(this.selEnd, this.box.value.length);
	this.box.value = newValue;
	this.box.setSelectionRange(caretPos, caretPos);
	this.box.focus();
}
SelObj.prototype.setSelText = setSelText;

function setSelSelectionRange(start, end){
	this.box.setSelectionRange(start, end);
}
SelObj.prototype.setSelSelectionRange = setSelSelectionRange;

//UNICODE CHARACTER FUNCTIONS
function IsCombiningDiacritic(CharNum){
	var Result = (((CharNum >= 0x0300)&&(CharNum <= 0x370))||((CharNum >= 0x20d0)&&(CharNum <= 0x20ff)));
	Result = Result || (((CharNum >= 0x3099)&&(CharNum <= 0x309a))||((CharNum >= 0xfe20)&&(CharNum <= 0xfe23)));
	return Result;
}

function IsCJK(CharNum){
	return ((CharNum >= 0x3000)&&(CharNum < 0xd800));
}

//SETUP FUNCTIONS
//BROWSER WILL REFILL TEXT BOXES FROM CACHE IF NOT PREVENTED
function ClearTextBoxes(){
	var NList = document.getElementsByTagName('input');
	for (var i=0; i<NList.length; i++){
		if ((NList[i].id.indexOf('Guess') > -1)||(NList[i].id.indexOf('Gap') > -1)){
			NList[i].value = '';
		}
		if (NList[i].id.indexOf('Chk') > -1){
			NList[i].checked = '';
		}
	}
}





//Polyfill for old Safari versions.
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}



//JMATCH-SPECIFIC CORE JAVASCRIPT CODE

//Work around Safari bug
var scrollable = true;

var listener = function(e) {
    if (! scrollable) {
        e.preventDefault();
    }
}

document.addEventListener('touchmove', listener, { passive:false });

var CorrectResponse = 'Correct! Well done.';
var IncorrectResponse = 'Sorry! Try again. ';
var YourScoreIs = 'Your score is ';
var FeedbackWidth = 200; //default
var ExBGColor = getComputedStyle(document.documentElement).getPropertyValue('--strExBGColor');
var PageBGColor = getComputedStyle(document.documentElement).getPropertyValue('--strPageBGColor');
var TextColor = getComputedStyle(document.documentElement).getPropertyValue('--strTextColor');
var TitleColor = getComputedStyle(document.documentElement).getPropertyValue('--strTitleColor');
var Penalties = 0;
var Score = 0;
var TimeOver = false;
var Locked = false;
var ShuffleQs = false;
var QsToShow = 0;
var ResizeTimer = null;

var LeftColPos = 100;
var RightColPos = 500;
var DragTop = 120;
var Finished = false;
var AnswersTried = '';

//Fixed and draggable card arrays
FC = new Array();
DC = new Array();

var DraggingCard = null;
var moveFunc = function(e){e.preventDefault(); doDrag(e)};
var endFunc = function(e){e.preventDefault(); endDrag(e)};

function beginDrag(e, Card){
	scrollable = false;
	DraggingCard = Card;
	DraggingCard.Highlight();
	window.addEventListener('mousemove',  moveFunc);
	window.addEventListener('mouseup',    endFunc);
	window.addEventListener('touchmove',  moveFunc);
	window.addEventListener('touchend',   endFunc);
	var currX, currY;
	if (e.touches){
		currX = e.touches[0].clientX;
		currY = e.touches[0].clientY;
	}
	else{
		currX = e.clientX;
		currY = e.clientY; 
	}

	topZ++;
	DraggingCard.style.zIndex = topZ;
	window.lastX = currX; 
	window.lastY = currY;
	return false;  
} 


function doDrag(e) {
	var currX, currY;
	var difX, difY;
	if (e.touches){
		currX = e.touches[0].clientX;
		currY = e.touches[0].clientY;
	}
	else{
		currX = e.clientX;
		currY = e.clientY; 
	}
	
	difX = currX - window.lastX; 
	difY = currY - window.lastY;
	DraggingCard.style.left = DraggingCard.GetL() + difX + 'px'; 
	DraggingCard.style.top  = DraggingCard.GetT() + difY + 'px'; 
	window.lastX = currX; 
	window.lastY = currY; 
	return false;
} 

function endDrag(e) { 
	DraggingCard.Unhighlight();
	window.removeEventListener('mousemove', moveFunc);
	window.removeEventListener('touchmove', moveFunc);
	window.removeEventListener('mouseup', endFunc);
	window.removeEventListener('touchend', endFunc);
	onEndDrag();
	scrollable = true;
	return true;
} 

function onEndDrag(){ 
	DraggingOrigPos = parseInt(DraggingCard.getAttribute('id').substring(2));
	DragEx.HandleDrop(DraggingOrigPos);
	DraggingCard = null;
} 

//Utility functions for dimensions of elements.
var GetL = function(){
	return this.offsetLeft;
}
var GetR = function(){
	return this.offsetLeft + this.offsetWidth;
}
var GetT = function(){
	return this.offsetTop;
}
var GetB = function(){
	return this.offsetTop + this.offsetHeight;
}
var GetH = function(){
	return this.offsetHeight;
}
var GetW = function(){
	return this.offsetWidth;
}
var Highlight = function(){
	this.style.backgroundColor = TextColor;
	this.style.color = ExBGColor;
};
var Unhighlight = function(){
	this.style.backgroundColor = ExBGColor;
	this.style.color = TextColor;
};
var GetOverlap = function(OtherCard){
	var smR=(this.GetR() < OtherCard.GetR())? this.GetR(): OtherCard.GetR();
	var lgL=(this.GetL() > OtherCard.GetL())? this.GetL(): OtherCard.GetL();
	var HDim=smR-lgL;
	if (HDim<1){return 0;}
	var smB=(this.GetB() < OtherCard.GetB())? this.GetB(): OtherCard.GetB();
	var lgT=(this.GetT() > OtherCard.GetT())? this.GetT(): OtherCard.GetT();
	var VDim=smB-lgT;
	if (VDim<1){return 0;}
	return (HDim*VDim);	
};

/*
  The new V7 DragEx object replaces the arrays of old.
*/
var V7JsonEx = '{  "ShuffleLeftItems": false,  "IsSimple": true,  "ItemsToShow": -1,  "LeftItems": [{"OrigPos": 0,     "Group": 0}, {"OrigPos": 1,     "Group": 1}, {"OrigPos": 2,     "Group": 2}, {"OrigPos": 3,     "Group": 3}, {"OrigPos": 4,     "Group": 4}],  "RightItems": [{"OrigPos": 0,     "Groups": [0], "MatchedWith": -1}, {"OrigPos": 1,     "Groups": [1], "MatchedWith": -1}, {"OrigPos": 2,     "Groups": [2], "MatchedWith": -1}, {"OrigPos": 3,     "Groups": [3], "MatchedWith": -1}, {"OrigPos": 4,     "Groups": [4], "MatchedWith": -1}]}';

var DragEx = JSON.parse(V7JsonEx);

//Methods for the object.
DragEx.Setup = function(){
	var i;
	






//Add custom functions to all the cards.
	document.querySelectorAll('div.CardStyle').forEach(function(div){
		div.Highlight = Highlight.bind(div);
		div.Unhighlight = Unhighlight.bind(div);
		div.GetL = GetL.bind(div);
		div.GetT = GetT.bind(div);
		div.GetR = GetR.bind(div);
		div.GetB = GetB.bind(div);
		div.GetH = GetH.bind(div);
		div.GetW = GetW.bind(div);
		div.GetOverlap = GetOverlap.bind(div);
	}.bind(this));
	
//Connect each of the items to its card.
	this.LeftItems.forEach(function(LI){
		LI.Card = document.getElementById('L_' + LI.OrigPos);
	}.bind(this));
	this.RightItems.forEach(function(RI){
		RI.Card = document.getElementById('R_' + RI.OrigPos);
		RI.Card.addEventListener('mousedown',  (function(e){beginDrag(e, this)}.bind(RI.Card)));
		RI.Card.addEventListener('touchstart', (function(e){beginDrag(e, this)}.bind(RI.Card)));
		RI.Card.style.cursor = 'grab';
	}.bind(this));
//Reduce the items as required. Sanity check: don't allow less than 2.
	if (this.ItemsToShow > 2){
		while (this.LeftItems.length > this.ItemsToShow){
			RemItem = Math.floor(this.LeftItems.length*Math.random());
			OP = this.LeftItems[RemItem].OrigPos;
			this.LeftItems[RemItem].Card.parentNode.removeChild(this.LeftItems[RemItem].Card);
			this.LeftItems.splice([RemItem], 1);

//Having removed an item from the left, we must remove the corresponding 
//one from the right if it exists. (There may not be a matching item if 
//the one removed was a distractor.)
			for (i = 0; i < this.RightItems.length; i++){
				if (this.RightItems[i].OrigPos == OP){
					this.RightItems[i].Card.parentNode.removeChild(this.RightItems[i].Card);
					this.RightItems.splice(i, 1);
				}
			}
		}
	}
//Now do any shuffling that's required.
	if (this.ShuffleLeftItems == true){
		this.LeftItems = Shuffle(this.LeftItems);
	}
	this.RightItems = Shuffle(this.RightItems);
	
	this.SetInitialPositions(true);
	
//Fix to avoid image dragging problem in cards with images.
	var DragImgs = document.querySelectorAll('div.CardStyle img');
	for (i = 0; i<DragImgs.length; i++){
		DragImgs[i]. onmousedown = function(){return false;}
	}

//We use a timeout here to allow card positions to be established
//before they're used for sliding matched cards.
	window.addEventListener('resize', function(e){
		clearTimeout(ResizeTimer);
		ResizeTimer = setTimeout(function(){DragEx.SetInitialPositions(false)}, 250);
	});

	

};

DragEx.GetLeftItemByOrigPos = function(Pos){
	for (var i=0; i<this.LeftItems.length; i++){
		if (this.LeftItems[i].OrigPos === Pos){
			return this.LeftItems[i];
		}
	}
	return null;
};

DragEx.GetRightItemByOrigPos = function(Pos){
	for (var i=0; i<this.RightItems.length; i++){
		if (this.RightItems[i].OrigPos === Pos){
			return this.RightItems[i];
		}
	}
	return null;
};

DragEx.SendHome = function(ROrigPos){
	Slide(ROrigPos, this.GetRightItemByOrigPos(ROrigPos).Home);
};

DragEx.SetInitialPositions = function(slide){
	
	var ExDiv = document.querySelector('div.ExerciseContainer');
	
//Get the default font size.
	var FontSize = Math.round(parseFloat(getComputedStyle(ExDiv).fontSize));
	
//Get the value of any drop-shadow on the cards so we can allow for it in layout.
	var DS =  window.getComputedStyle(this.LeftItems[0].Card).getPropertyValue('box-shadow').split('px ');
	var DSOffset = 5;
	if ((DS.length > 1)&&(!(Number.isNaN(parseFloat(DS[1]))))){
		DSOffset += Math.abs(Math.ceil(parseFloat(DS[1])));
	}
	
//Calculate container dimensions and positions
	DragTop = parseInt(document.getElementById('CheckButtonDiv').offsetHeight) + parseInt(document.getElementById('CheckButtonDiv').offsetTop) + DSOffset;
	
	var ExDivLeft = ExDiv.offsetLeft;
	var ExDivWidth = ExDiv.offsetWidth;	
	var Indent = Math.min(Math.floor(ExDivWidth / 20), FontSize);
	var DragWidth = Math.floor(ExDivWidth / 4);
	LeftColPos = ExDivLeft + Indent;

//Calculate the width for the left items.	
	var WidestLeft = 0;
	for (var i=0; i<this.LeftItems.length; i++){
		var CurrCard = this.LeftItems[i].Card;
		CurrCard.style.width = '';
		CurrCard.style.height = '';
		var w = CurrCard.GetW() + 10;
		if (w > WidestLeft){
			WidestLeft = w;
		}
	}
	if (WidestLeft > DragWidth){WidestLeft = DragWidth;}

//Calculate the width for the right items.
	DragWidth = Math.floor((ExDivWidth-WidestLeft)/2) - 24;
	RightColPos = ExDivWidth + LeftColPos - (DragWidth + 14 + Indent);
	var Highest = 0;
	var WidestRight = 0;

	for (i=0; i<this.RightItems.length; i++){
		var CurrCard = this.RightItems[i].Card;
		CurrCard.style.width = '';
		CurrCard.style.height = '';
		if (CurrCard.GetW() > DragWidth){CurrCard.style.width = DragWidth + 'px';}
		if (CurrCard.GetH() > Highest){Highest = CurrCard.GetH();}
		if (CurrCard.GetW() > WidestRight){WidestRight = CurrCard.GetW();}
	}

//Size and position the right items.		
	var CurrTop = DragTop;
	
	for (i=0; i<this.RightItems.length; i++){
		var CurrCard = this.RightItems[i].Card;
		CurrCard.style.top = CurrTop + 'px';
		CurrCard.style.left = RightColPos + 'px';
		CurrCard.style.height = Highest + 'px';
		CurrCard.style.width = (WidestRight + 10) + 'px';
		this.RightItems[i].Home = [RightColPos, CurrTop];
		CurrTop = CurrTop + CurrCard.GetH() + DSOffset;
	}

//Size and position the left items.
	CurrTop = DragTop;

	for (var i=0; i<this.LeftItems.length; i++){
		var CurrCard = this.LeftItems[i].Card;
		CurrCard.style.width = WidestLeft + 'px';
		if (CurrCard.GetH() < Highest){CurrCard.style.height = Highest + 'px';}
		CurrCard.style.top = CurrTop + 'px';
		CurrCard.style.left = LeftColPos + 'px';
		CurrTop = CurrTop + CurrCard.GetH() + DSOffset;
	}

//Now we clone the top navbar to create a bottom	
//navbar, and position it.
	var TopNav = document.getElementById('TopNavBar');
	var ReadingDiv = document.getElementById('ReadingDiv');
	
	if (TopNav !== null){

//First delete one if there is one.
		var BottomNav = document.getElementById('BottomNavBar');
		if (BottomNav === null){
			BottomNav = document.getElementById('TopNavBar').cloneNode(true);
			BottomNav.setAttribute('id', 'BottomNavBar');
			BottomNav.style.position = 'absolute';
			document.body.appendChild(BottomNav);
		}
		var LowestLeft = this.LeftItems[this.LeftItems.length - 1].Card.GetB();
		var LowestRight = this.RightItems[this.RightItems.length - 1].Card.GetB();
		var ReadingBottom = (ReadingDiv)? ReadingDiv.offsetTop + ReadingDiv.offsetHeight : 0;
		BottomNav.style.top = (Math.max(ReadingBottom, LowestLeft, LowestRight) + FontSize) + 'px' ;
		BottomNav.style.width = document.getElementById('TopNavBar').offsetWidth + 'px';
	}
	
//Now slide any already-matched items into position.
	this.RightItems.forEach(function(RI){
		if (RI.MatchedWith > -1){
			var TargPoint = this.GetDockPoint(RI.MatchedWith, RI.Card);
			if (RI.MarkedWrong == true){
				RI.Card.Highlight();
				TargPoint[0] = TargPoint[0] + 10;
			}
			if (slide == true){
				Slide(RI.OrigPos, TargPoint);
			}
			else{
				RI.Card.style.left = TargPoint[0] + 'px';
				RI.Card.style.top  = TargPoint[1] + 'px'; 
			}
		}
	}.bind(this));
};

DragEx.GetDockPoint = function(LeftOrigPos, RightCard){
	var TargL, TargT;
	var LeftItem = this.GetLeftItemByOrigPos(LeftOrigPos);
	if (LeftItem !== null){
		var LeftCard = LeftItem.Card;
		TargL = LeftCard.GetR() + 5;
		TargT = (LeftCard.GetT() + Math.floor((LeftCard.GetH() - RightCard.GetH()) / 2));
		return [TargL, TargT];
	}
	else{
		return [0,0];
	}
}

DragEx.HandleDrop = function(ROrigPos){
	var RI = this.GetRightItemByOrigPos(ROrigPos);
	RI.MarkedWrong = false;
	RI.MatchedWith = -1;
	RI.Card.Unhighlight();
	var Overlap = 0;
	var MatchedWith = -1;
	var i;
	this.LeftItems.forEach(function(LI){
		var OL = RI.Card.GetOverlap(LI.Card);
//Check whether it overlaps a card, or is in exact docking position with it.
		var DP = this.GetDockPoint(LI.OrigPos, RI.Card);
		if ((OL > Overlap)||((RI.Card.GetL() == DP[0])&&(RI.Card.GetT() == DP[1]))){
			Overlap = OL;
			MatchedWith = LI.OrigPos;
		}
	}.bind(this));
	if (MatchedWith > -1){
		RI.MatchedWith = MatchedWith;
		TargPoint = this.GetDockPoint(MatchedWith, RI.Card);
		Slide(ROrigPos, TargPoint);
		this.RightItems.forEach(function(RI2){
			if ((RI2.OrigPos !== RI.OrigPos)&&(RI2.MatchedWith == MatchedWith)){
				RI2.MatchedWith = -1;
				RI2.Card.Unhighlight();
				this.SendHome(RI2.OrigPos);
				RI2.MarkedWrong = false;
			}
		}.bind(this));
	}
	else{
		this.SendHome(ROrigPos);
	}
}

//This function checks answers and calculates the 
//current score, then returns true for "finished" or
//false for "not yet finished". The object's Score
//property can then be read.
DragEx.CheckAnswers = function(){
/*
	Check each right item to see whether a) it had an 
	original match on the left, and b) it is matched
	to a left item whose group is one of its groups.
*/
	if (!this.hasOwnProperty('Penalties')){
		this.Penalties = 0;
	}
	var ItemsToCount = 0;
	var CorrectItems = 0;
	var Done = true; //Assume till proven otherwise.
	
//Tot up the scores.
	this.RightItems.forEach(function(RI){
//Only use it if there is a match for it.
		if (this.GetLeftItemByOrigPos(RI.OrigPos) !== null){
			ItemsToCount++;
			if (RI.MatchedWith !== -1){
				var LI = this.GetLeftItemByOrigPos(RI.MatchedWith);
				if (RI.Groups.indexOf(LI.Group) > -1){
					CorrectItems++;
				}
				else{
					Done = false;
					RI.Card.Highlight();
					RI.MarkedWrong = true;
					RI.Card.style.left = (RI.Card.GetL() + 10) + 'px';
				}
			}
			else{
				Done = false;
			}
		}
		else{
//It's a distractor and shouldn't be matched. Deduct one from score.
			if (RI.MatchedWith !== -1){
				Done = false;
				RI.Card.Highlight();
				RI.Card.style.left = (RI.Card.GetL() + 10) + 'px';
				RI.MarkedWrong = true;
				CorrectItems--;
			}
		}
	}.bind(this));
	if (!this.hasOwnProperty('Score')){
		this.Score = 0;
	}
	this.Score = Math.round((100*(CorrectItems - this.Penalties))/ItemsToCount);
	if (Done === false){
		this.Penalties++;
	}
	return Done;
};

function Slide(ROrigPos, TargPoint){
	var Card = DragEx.GetRightItemByOrigPos(ROrigPos).Card;
	if (Math.abs(Card.GetL() - TargPoint[0]) <= 5){
		Card.style.left = TargPoint[0] + 'px';
	}
	else{
		var LeftShift = Card.GetL() < TargPoint[0]? 5: -5;
		Card.style.left = Card.GetL() + LeftShift + 'px';
	}
	if (Card.GetT() !== TargPoint[1]){
		if (Math.abs(Card.GetT() - TargPoint[1]) <= 5){
			Card.style.top = TargPoint[1] + 'px';
		}
		else{
			var TopShift = Card.GetT() < TargPoint[1]? 5: -5;
			Card.style.top = Card.GetT() + TopShift + 'px';
		}
	}
	if ((Card.GetL() != TargPoint[0])||(Card.GetT() != TargPoint[1])){
		setTimeout('Slide(' + ROrigPos + ', [' + TargPoint[0] + ',' + TargPoint[1] + '])', 1);
	}
}

function TimerStartUp(){
	setTimeout('DragEx.Setup()', 300);
}

function CheckAnswers(){
	if (Locked == true){return;}
	
	var Feedback = '';

	var AllDone = DragEx.CheckAnswers();
	Score = DragEx.Score;
	if (Score < 0){Score = 0;}

	if (AllDone == true){
		Feedback = YourScoreIs + ' ' + Score + '%.<br/>' + CorrectResponse;
	}
	else {
		if (TimeOver == true){
			Feedback = YourScoreIs + ' ' + Score + '%.'
		}
		else{
			Feedback = YourScoreIs + ' ' + Score + '%.' + '<br />' + IncorrectResponse;
		}
	}
	ShowMessage(Feedback);
	
//If the exercise is over, deal with that
	if ((AllDone == true)||(TimeOver == true)){


		TimeOver = true;
		Locked = true;
		Finished = true;
		WriteToInstructions(Feedback);
	}

	
//The window layout may be affected by the feedback, so 
//put the cards in place again.
	DragEx.SetInitialPositions(false);
}









//-->

//]]>













//imagem play

function toggleDisplay(elementId, displayStyle) {
    var element = document.getElementById(elementId);
    if (element) {
    element.style.display = displayStyle;
    }
    }
    
    function addHoverEffect(triggerId, targetId) {
    var triggerElement = document.getElementById(triggerId);
    if (triggerElement) {
         triggerElement.addEventListener('mouseover', function() {
    toggleDisplay(targetId, 'block');
    });
    triggerElement.addEventListener('mouseout', function() {
         toggleDisplay(targetId, 'none');
    });
    }
    }
    
    var elements = [
    { trigger: 'play1', target: 'pt1' },
    { trigger: 'play2', target: 'pt2' },
    { trigger: 'play3', target: 'pt3' },
    { trigger: 'play4', target: 'pt4' },
    { trigger: 'play5', target: 'pt5' },
    { trigger: 'play6', target: 'pt6' },
    { trigger: 'code1', target: 'ps1' },
    { trigger: 'text1', target: 'tt1' },
    { trigger: 'text2', target: 'tt2' },
    { trigger: 'text3', target: 'tt3' },
    { trigger: 'text4', target: 'tt4' },
    { trigger: 'text5', target: 'tt5' },
    { trigger: 'text6', target: 'tt6' },
    { trigger: 'replay1', target: 'rt1' },
    { trigger: 'replay3', target: 'rt3' },
    { trigger: 'replay4', target: 'rt4' },
    { trigger: 'replay5', target: 'rt5' },
    { trigger: 'replay6', target: 'rt6' },
    { trigger: 'sound1', target: 'st1' },
    { trigger: 'sound2', target: 'st2' },
    { trigger: 'sound3', target: 'st3' },
    { trigger: 'sound4', target: 'st4' },
    { trigger: 'sound5', target: 'st5' },
    { trigger: 'sound6', target: 'st6' },
    { trigger: 'code2', target: 'ps2' },
    { trigger: 'code3', target: 'ps3' },
    { trigger: 'code4', target: 'ps4' },
    { trigger: 'code5', target: 'ps5' },
    { trigger: 'code6', target: 'ps6' },
    { trigger: 'replay2', target: 'rt2' }
   
    ];
    
    elements.forEach(function(element) {
    addHoverEffect(element.trigger, element.target);
    });
/*

*/

// ------ Exibindo o pseúdocodigo --------
document.getElementById('code1').addEventListener('click', function() {
    var c1 = document.getElementById('c1');
    var tx3 = document.getElementById("tx2");

   // var txt0 = document.getElementById("tx3");

    if (c1.style.display === 'none') {
            c1.style.display = 'block';
            tx3.style.display = 'none';


      } else {
            c1.style.display = 'none';
            tx3.style.display = 'block';

        }
        });


// Exibindo a mensagem text1
  // Seleciona os elementos HTML pelos IDs
  

//Botão replay
document.getElementById("replay1").addEventListener("click", function() {
window.location.reload();
});

/*----------------------

/* -----------------------------
*/

// ------------------------------- Cenario 3 - Quarta Parte --------------------------------------------- \\

const manIdle3 = document.getElementById("manIdle3");
const cofre3 = document.getElementById("cofre3");
const moeda3 = document.getElementById("moeda3");
const playButton3 = document.getElementById("play3");
const placa003 = document.getElementById("placa003");
const placa03 = document.getElementById("placa03");

let position3 = 0;  // Posição inicial
let direction3 = -1;  // Direção de movimento (-1 para esquerda)
let speed3 = 10;  // Velocidade de movimento
let interval3;  // Intervalo para a animação
let paused3 = false;  // Estado de pausa
const totalSteps3 = 54;  // Número total de passos
const pauseStep3 = 30;  // Passo onde ocorre a pausa

// Função para iniciar a animação da quarta parte

function startAnimation3() {
    //alert("Hello! I am an alert box!");

    playButton3.disabled = true;  // Desabilita o botão enquanto a animação está em execução

    // Mostrar imagem inicial
    manIdle3.style.backgroundImage = "url('/ensino/imagens/velho-sem-moeda.png')";  // Define a imagem inicial
    manIdle3.style.transform = 'translateX(0px)';  // Reseta a posição inicial
    
    position3 = 0;  // Reinicia a posição do personagem
    let i3 = 0;  // Reinicia o contador de frames
    paused3 = false;  // Reinicia o estado de pausa

    interval3 = setInterval(function() {
       // alert("Hello! I am an alert box!");
        if (i3 >= totalSteps3) {
            // Ao final da animação, parar a animação
            manIdle3.style.transform = `translateX(${position3}px)`;  // Atualiza a posição final
            clearInterval(interval3);  // Interrompe o intervalo quando o movimento estiver completo
            playButton3.disabled = false;  // Reabilita o botão após o término da animação
            return;
        }

        if (i3 === pauseStep3 && !paused3) {
            // Pausa no meio do caminho
            paused3 = true;  // Define o estado de pausa para true
            clearInterval(interval3);  // Pausa a animação
            setTimeout(() => {
                // Troca a imagem e continua após 1 segundo
                moeda3.classList.add('hidden'); // Mostra o personagem andando
                manIdle3.style.backgroundImage = "url('/ensino/imagens/velho-com-moeda.png')";  // Troca de imagem
                paused3 = false; // Reseta o estado de pausa
                continueAnimation3(i3);  // Continua a animação após a pausa
            }, 1000);  // Pausa por 1 segundo
        } else if (!paused3) {
            startMoving3();  // Continua a movimentação
        }

        i3++;  // Incrementa o contador de frames
    }, 60);
}

// Função para continuar a animação após a pausa
function continueAnimation3(currentStep3) {
   // alert("Hello! I am an alert box!");

    interval3 = setInterval(function() {
        if (currentStep3 >= totalSteps3) {
            // Ao final da animação, parar a animação
            manIdle3.style.transform = `translateX(${position3}px)`;  // Atualiza a posição final
            clearInterval(interval3);  // Interrompe o intervalo quando o movimento estiver completo
            playButton3.disabled = false;  // Reabilita o botão após o término da animação
            return;
        }
        
        startMoving3();  // Continua a movimentação
        currentStep3++;  // Incrementa o contador de frames
        if(currentStep3==54){
            manIdle3.style.backgroundImage = "url('/ensino/imagens/velho-sem-moeda.png')";  // Troca de imagem
            placa03.style.display = 'none';
            placa003.style.display = 'block';

        }
    }, 54);
}

// Função para continuar o movimento
function startMoving3() {
   // alert("Hello! I am an alert box!");

    position3 += direction3 * speed3;  // Calcula a nova posição (movimento para a esquerda)
    manIdle3.style.transform = `translateX(${position3}px)`;  // Move o personagem para a esquerda
}

// Adiciona um evento de clique ao botão "Play"
playButton3.addEventListener('click', startAnimation3);

// ----------------------------- Fim da 3a parte --------------------------------------- \\

// ------------------------------- Quarta Parte --------------------------------------------- \\

document.getElementById('play4').addEventListener('click', function() {
    // Exibir o valor de text4
    document.getElementById('texto4').style.display = 'block';
    
    // Exibir msg4 com efeito de máquina de escrever
    var msg4 = document.getElementById('msg4');
    msg4.style.display = 'block';
    var text = msg4.innerHTML;
    msg4.innerHTML = '';
    var i = 0;
    function typeWriter() {
    if (i < text.length) {
    msg4.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
    }
    }
    typeWriter();
    });


// Fim da quarta parte

//---------------------------------------- 5a Parte ------------------------------
const manIdle5 = document.getElementById("manIdle5");
const moeda5 = document.getElementById("moeda5");
const playButton5 = document.getElementById("play5");

let position5 = 0;  // Posição inicial
let direction5 = -1;  // Direção de movimento (-1 para esquerda)
let speed5 = 10;  // Velocidade de movimento
let interval5;  // Intervalo para a animação
let paused5 = false;  // Estado de pausa
const totalSteps5 = 54;  // Número total de passos
const pauseStep5 = 30;  // Passo onde ocorre a pausa

// Função para iniciar a animação
function startAnimation5() {
    const input = document.getElementById("fname").value.trim(); // Pega o valor do input e remove espaços
    if (input === "") {
        alert("Por favor, insira a instrução '.");
        return;  // Não inicia a animação
    }

    if (input !== "poupanca+10" && input !== "poupanca + 10") {
        alert("Instrução errada. Tente de novo.");
        return;  // Não inicia a animação
    }

    // Se a instrução estiver correta, prossegue com a animação
    playButton5.disabled = true;  // Desabilita o botão enquanto a animação está em execução

    manIdle5.style.backgroundImage = "url('/ensino/imagens/velho-sem-moeda.png')";  // Define a imagem inicial
    manIdle5.style.transform = 'translateX(0px)';  // Reseta a posição inicial
    
    position5 = 0;  // Reinicia a posição do personagem
    let i5 = 0;  // Reinicia o contador de frames
    paused5 = false;  // Reinicia o estado de pausa

    interval5 = setInterval(function() {
        if (i5 >= totalSteps5) {
            manIdle5.style.transform = `translateX(${position5}px)`;  // Atualiza a posição final
            clearInterval(interval5);  // Interrompe o intervalo quando o movimento estiver completo
            playButton5.disabled = false;  // Reabilita o botão após o término da animação
            return;
        }

        if (i5 === pauseStep5 && !paused5) {
            paused5 = true;  // Define o estado de pausa
            clearInterval(interval5);  // Pausa a animação
            setTimeout(() => {
                moeda5.classList.add('hidden'); // Mostra o personagem com a moeda
                manIdle5.style.backgroundImage = "url('/ensino/imagens/velho-com-moeda.png')";  // Troca de imagem
                paused5 = false;  // Reseta o estado de pausa
                continueAnimation5(i5);  // Continua a animação após a pausa
            }, 1000);  // Pausa por 1 segundo
        } else if (!paused5) {
            startMoving5();  // Continua a movimentação
        }

        i5++;  // Incrementa o contador de frames
    }, 60);
}

// Função para continuar a animação após a pausa
function continueAnimation5(currentStep5) {
    interval5 = setInterval(function() {
        if (currentStep5 >= totalSteps5) {
            manIdle5.style.transform = `translateX(${position5}px)`;  // Atualiza a posição final
            clearInterval(interval5);  // Interrompe o intervalo quando o movimento estiver completo
            playButton5.disabled = false;  // Reabilita o botão após o término da animação
            return;
        }
        startMoving5();  // Continua a movimentação
        currentStep5++;  // Incrementa o contador de frames


        if(currentStep5==54){
            manIdle5.style.backgroundImage = "url('/ensino/imagens/velho-sem-moeda.png')";  // Troca de imagem
            placa05.style.display = 'none';
            placa005.style.display = 'block';

        }





    }, 60);
}

// Função para movimentar o personagem
function startMoving5() {
    position5 += direction5 * speed5;  // Atualiza a posição
    manIdle5.style.transform = `translateX(${position5}px)`;  // Move o personagem
}

// Adiciona evento de clique ao botão
playButton5.addEventListener("click", startAnimation5);


// ----------------------------- Fim da 5a parte --------------------------------------- \\
// ----------------------------- 6a Parte ---------------------------------------------- //
function updateLineNumbers() {
    const editor = document.getElementById('editor');
    const lineNumbers = document.getElementById('lineNumbers');
    const lines = editor.value.split('\n').length;
    lineNumbers.innerHTML = '';
    for (let i = 1; i <= lines; i++) {
    const lineNumber = document.createElement('div');
    lineNumber.textContent = i;
    lineNumbers.appendChild(lineNumber);
    }
    }
    
    function syncScroll() {
    const editor = document.getElementById('editor');
    const lineNumbers = document.getElementById('lineNumbers');
    lineNumbers.scrollTop = editor.scrollTop;
    }
    
    // Initialize line numbers
    updateLineNumbers();


//Programando o textarea

        // Texto correto do pseudocódigo
        const pseudocodeCorreto = `Algoritmo atribuicao
Inicio
var poupanca
poupanca = poupanca + 10
escreva(poupanca)
Fim`;

        // Função para "compilar" o pseudocódigo
        const manIdle7 = document.getElementById("manIdle7");
        const moeda7 = document.getElementById("moeda7");
        const playButton7 = document.getElementById("play7");
        const editor = document.getElementById("editor");
        const highlightedCodeDiv = document.getElementById("highlightedCode");


        let position7 = 0;  // Posição inicial
        let direction7 = -1;  // Direção de movimento (-1 para esquerda)
        let speed7 = 10;  // Velocidade de movimento
        let interval7;  // Intervalo para a animação
        let paused7 = false;  // Estado de pausa
        const totalSteps7 = 54;  // Número total de passos
        const pauseStep7 = 30;  // Passo onde ocorre a pausa

        // Pseudocódigo correto
        const correctPseudocode = `Algoritmo atribuicao
Inicio
var poupanca
poupanca = poupanca + 10 

escreva(poupanca)
Fim`;

        // Função para iniciar a animação
        function startAnimation7() {
            const userCode = editor.value.trim(); // Pega o valor do editor

            // Verificação do pseudocódigo no editor
            if (userCode === "") {
                alert("Por favor, insira o pseudocódigo.");
                return;
                } else if (!comparePseudocode(userCode, correctPseudocode)) {
                if (isPartiallyCorrect(userCode, correctPseudocode)) {
                alert("Pseudocódigo parcialmente incorreto, continue tentando.");
                } else {
                alert("Pseudocódigo incorreto. Tente novamente.");
                }
                highlightErrors(userCode, correctPseudocode);
                return;
                } else {
                alert("Parabéns, você acertou!");
                }

                     

            // Se a instrução estiver correta, prossegue com a animação
            playButton7.disabled = true;  // Desabilita o botão enquanto a animação está em execução

            manIdle7.style.backgroundImage = "url('/ensino/imagens/velho-sem-moeda.png')";  // Define a imagem inicial
            manIdle7.style.transform = 'translateX(0px)';  // Reseta a posição inicial
            
            position7 = 0;  // Reinicia a posição do personagem
            let i7 = 0;  // Reinicia o contador de frames
            paused7 = false;  // Reinicia o estado de pausa

            interval7 = setInterval(function() {
                if (i7 >= totalSteps7) {
                    manIdle7.style.transform = `translateX(${position7}px)`;  // Atualiza a posição final
                    clearInterval(interval7);  // Interrompe o intervalo quando o movimento estiver completo
                    playButton7.disabled = false;  // Reabilita o botão após o término da animação
                    return;
                }

                if (i7 === pauseStep7 && !paused7) {
                    paused7 = true;  // Define o estado de pausa
                    clearInterval(interval7);  // Pausa a animação
                    setTimeout(() => {
                        moeda7.classList.add('hidden'); // Mostra o personagem com a moeda
                        manIdle7.style.backgroundImage = "url('/ensino/imagens/velho-com-moeda.png')";  // Troca de imagem
                        paused7 = false;  // Reseta o estado de pausa
                        continueAnimation7(i7);  // Continua a animação após a pausa
                    }, 1000);  // Pausa por 1 segundo
                } else if (!paused7) {
                    startMoving7();  // Continua a movimentação
                }

                i7++;  // Incrementa o contador de frames
            }, 60);
        }



        function comparePseudocode(userCode, correctCode) {
            const normalize = (str) => str.replace(/\s+/g, '').replace(/\(\s*/g, '(').replace(/\s*\)/g, ')');
            return normalize(userCode) === normalize(correctCode);
            }
            


            function isPartiallyCorrect(userCode, correctCode) {
                const userLines = userCode.split('\n');
                const correctLines = correctCode.split('\n');
                let correctCount = 0;
                
                for (let i = 0; i < correctLines.length; i++) {
                if (normalize(userLines[i]) === normalize(correctLines[i])) {
                correctCount++;
                }
                }
                
                return correctCount > 0 && correctCount < correctLines.length;
                }

                function normalize(str) {
                    return str ? str.replace(/\s+/g, '').replace(/\(\s*/g, '(').replace(/\s*\)/g, ')') : '';
                    }

        // Função para continuar a animação após a pausa
        function continueAnimation7(currentStep7) {
            interval7 = setInterval(function() {
                if (currentStep7 >= totalSteps7) {
                    manIdle7.style.transform = `translateX(${position7}px)`;  // Atualiza a posição final
                    clearInterval(interval7);  // Interrompe o intervalo quando o movimento estiver completo
                    playButton7.disabled = false;  // Reabilita o botão após o término da animação
                    return;
                }
                startMoving7();  // Continua a movimentação
                currentStep7++;  // Incrementa o contador de frames
            }, 60);
        }

        // Função para movimentar o personagem
        function startMoving7() {
            position7 += direction7 * speed7;  // Atualiza a posição
            manIdle7.style.transform = `translateX(${position7}px)`;  // Move o personagem
        }

        // Adiciona evento de clique ao botão
        playButton7.addEventListener("click", startAnimation7);

        // Função para destacar erros no pseudocódigo inserido
        function highlightErrors(userCode, correctCode) {
            const userLines = userCode.split('\n');
            const correctLines = correctCode.split('\n');
            
            let highlightedCode = '';
            let missingVar = true;
            
            for (let i = 0; i < correctLines.length; i++) {
            if (normalize(userLines[i]) !== normalize(correctLines[i])) {
            highlightedCode += `<span style="background-color: yellow;">${userLines[i] || ''}</span>\n`;
            }
            if (normalize(userLines[i]) === 'varpoupanca') {
            missingVar = false;
            }
            }
            
            if (missingVar && userCode.includes('poupanca = poupanca + 10') && userCode.includes('escreva(poupanca)')) {
            alert("Você precisa declarar a variável 'poupanca'.");
            }
            
            highlightedCodeDiv.innerHTML = highlightedCode;
            }


 var initial = atob("QWxnb3JpdG1vIGF0cmlidWljYW8NCiAgdmFyIHBvdXBhbmNhDQpJbmljaW8NCiAgICAgZXNjcmV2YSjigJxEaWdpdGUgbyB2YWxvciBkYSBwb3VwYW5jYeKAnSkNCnBvdXBhbmNhID0gcG91cGFuY2EgKyAxMA0KZWNyZXZhKHBvdXBhbmNhKQ0KRmltDQo=");

        function displayErrors(fb) {
            if(fb.errors.length > 0) {
                alert(fb.errors[0]);
            }
        } 

        $(document).ready(function(){
            var parson = new ParsonsWidget({
                'sortableId': 'sortable',
                'trashId': 'sortableTrash',
                'max_wrong_lines': 1,
                'feedback_cb' : displayErrors
            });
            parson.init(initial);
            parson.shuffleLines();
            $("#newInstanceLink").click(function(event){
                event.preventDefault();
                parson.shuffleLines();
            });
            $("#feedbackLink").click(function(event){
                event.preventDefault();
                parson.getFeedback();
            });
        });


    // ------------------------------------------- Fim 6a parte --------------------------------\\
// --------------------------- cenario 7 atribuicao -----------
var initial1 = atob("QWxnb3JpdG1vIEF0cmlidWljYW8NCkluaWNpbw0KIHBvdXBhbmNhID0gMTANCkZpbQ0K");

        function displayErrors(fb) {
            if(fb.errors.length > 0) {
                alert(fb.errors[0]);
            }
        } 

        $(document).ready(function(){
            var parson1 = new ParsonsWidget({
                'sortableId': 'sortable1',
                'trashId': 'sortableTrash1',
                'max_wrong_lines': 1,
                'feedback_cb' : displayErrors
            });
            parson1.init(initial1);
            parson1.shuffleLines();
            $("#newInstanceLink1").click(function(event){
                event.preventDefault();
                parson1.shuffleLines();
            });
            $("#feedbackLink1").click(function(event){
                event.preventDefault();
                parson1.getFeedback();
            });
        });

// ----------------------------- 8a parte ------------------------
var initial2 = atob("QWxnb3JpdG1vIGF0cmlidWljYW8NCiB2YXIgcG91cGFuY2ENCkluaWNpbw0KIHBvdXBhbmNhID0gMTANCiBlc2NyZXZhKHBvdXBhbmNhKQ0KRmltDQo=");

        function displayErrors(fb) {
            if(fb.errors.length > 0) {
                alert(fb.errors[0]);
            }
        } 

        $(document).ready(function(){
            var parson2 = new ParsonsWidget({
                'sortableId': 'sortable2',
                'trashId': 'sortableTrash2',
                'max_wrong_lines': 1,
                'feedback_cb' : displayErrors
            });
            parson2.init(initial2);
            parson2.shuffleLines();
            $("#newInstanceLink2").click(function(event){
                event.preventDefault();
                parson2.shuffleLines();
            });
            $("#feedbackLink2").click(function(event){
                event.preventDefault();
                parson2.getFeedback();
            });
        });

    // ---------------------------------------- 9a parte -------------------------------
    
    var initial3 = atob("QWxnb3JpdG1vIGF0cmlidWljYW8NCiAgdmFyIHBvdXBhbmNhDQpJbmljaW8NCiBlc2NyZXZhKOKAnERpZ2l0ZSBvIHZhbG9yIGRhIHBvdXBhbmNh4oCdKQ0KIHBvdXBhbmNhID0gcG91cGFuY2EgKyAxMA0KIGVjcmV2YShwb3VwYW5jYSkNCkZpbQ0K");

    function displayErrors(fb) {
        if(fb.errors.length > 0) {
            alert(fb.errors[0]);
        }
    } 

    $(document).ready(function(){
        var parson3 = new ParsonsWidget({
            'sortableId': 'sortable3',
            'trashId': 'sortableTrash3',
            'max_wrong_lines': 1,
            'feedback_cb' : displayErrors
        });
        parson3.init(initial3);
        parson3.shuffleLines();
        $("#newInstanceLink3").click(function(event){
            event.preventDefault();
            parson3.shuffleLines();
        });
        $("#feedbackLink3").click(function(event){
            event.preventDefault();
            parson3.getFeedback();
        });
    });
    
    
    
    
    
    /*var initial = "Algoritmo atribuicao \n" +
    "var poupanca \n" +
    "Inicio \n" +
    "escreva(\"Digite o valor da poupanca\")\n" +
    "poupanca = poupanca + 10\n" +
    "escreva(poupanca)\n" +
    "Fim";

    function displayErrors(fb) {
        if(fb.errors.length > 0) {
            alert(fb.errors[0]);
        }
    } 

    $(document).ready(function(){
        var parson = new ParsonsWidget({
            sortableId: 'sortable',
            trashId: 'sortableTrash',
            max_wrong_lines: 1,
            feedback_cb : displayErrors,
            can_indent: false
        });
        parson.init(initial);
        parson.shuffleLines();
        $("#newInstanceLink").click(function(event){
            event.preventDefault();
            parson.shuffleLines();
        });
        $("#feedbackLink").click(function(event){
            event.preventDefault();
            parson.getFeedback();
        });
    });

*/

// -------------------------- 8a parte - Exercicios ---------------------------------------
function validateAndEvaluate() {
    var form = document.getElementById("quizForm");
    var allAnswered = true;
    var correctAnswers = {
        q1: "Armazenar dados na memória",
        q2: "Alterar o valor de uma variável existente",
        q3: "Para armazenar diferentes tipos de dados",
        q4: "10",
        q5: "saldo + 50"
        // Continue adicionando as respostas corretas para as demais perguntas
    };

    var totalQuestions = Object.keys(correctAnswers).length;
    var score = 0;
    var unansweredQuestions = [];

    // Valida se todas as opções estão preenchidas
    for (var key in correctAnswers) {
        var answer = form.elements[key].value;
        if (!answer) {
            allAnswered = false;
            unansweredQuestions.push(key);
        }
    }

    if (!allAnswered) {
        alert("Por favor, responda todas as perguntas antes de submeter.");
        return;
    }

    // Avalia as respostas e destaca as erradas
    for (var key in correctAnswers) {
        var userAnswer = form.elements[key].value;
        var questionLabel = form.querySelector('input[name="' + key + '"]').parentElement.parentElement;

        // Limpa estilos antigos
        questionLabel.classList.remove('correct', 'error');

        if (userAnswer === correctAnswers[key]) {
            score++;
            questionLabel.classList.add('correct'); // Marca as respostas corretas
        } else {
            questionLabel.classList.add('error');   // Marca as respostas erradas
        }
    }

    document.getElementById("result").innerText = "Você acertou " + score + " de " + totalQuestions + " perguntas.";
}