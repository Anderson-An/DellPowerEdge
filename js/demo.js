/**
 * Created by Administrator on 2018-12-10.
 */
var person = [
    { name: 'R930', src: 'R930.png',ser:'13G', BIOS: 'BIOS', des: 'Rack Servers',
	biosAddress:'77KC8',
	idrac:'',
	idracAddress:'',
	perc:'',percAddress:'', },
    { name: 'R830', src: 'r830.jpg',ser:'13G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'3F75P',idrac:'',perc:'' ,percAddress:'', },
    { name: 'R730', src: 'R730.jpg',ser:'13G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'2JFRF',idrac:'',perc:'' ,percAddress:'', },
    { name: 'R630', src: 'R630.jpg',ser:'13G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'2JFRF',idrac:'',perc:''  ,percAddress:'', },
	{ name: 'R530XD', src: 'R530.jpg',ser:'13G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'16CF5',idrac:'',perc:'' ,percAddress:'', },
    { name: 'R530', src: 'R530.jpg',ser:'13G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'GC4J0',idrac:'',perc:'' ,percAddress:'', },
    { name: 'R430', src: 'R430.jpg',ser:'13G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'GC4J0',idrac:'',perc:''  ,percAddress:'', },
	{ name: 'T430', src: 'M630.jpg',ser:'13G', BIOS: 'BIOS', des: 'Tower Servers',biosAddress:'GC4J0',idrac:'',perc:'' ,percAddress:'', }, 
    { name: 'R330', src: 'R330.jpg',ser:'13G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'C86TV',idrac:'',perc:''  ,percAddress:'', },
    { name: 'R230', src: 'R230.jpg',ser:'13G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'C86TV',idrac:'',perc:''  ,percAddress:'', },
	{ name: 'T330', src: 'M630.jpg',ser:'13G', BIOS: 'BIOS', des: 'Tower Servers',biosAddress:'C86TV',idrac:'',perc:'' ,percAddress:'', }, 
	{ name: 'T130', src: 'M630.jpg',ser:'13G', BIOS: 'BIOS', des: 'Tower Servers',biosAddress:'C86TV',idrac:'',perc:'' ,percAddress:'', }, 
	{ name: 'M830', src: 'M830.jpg',ser:'13G', BIOS: 'BIOS', des: 'Blade Servers',biosAddress:'5NCC5',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'M830P', src: 'M630 (for PE VRTX).jpg',ser:'13G', BIOS: 'BIOS', des: 'Blade Servers',biosAddress:'5NCC5',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'M630', src: 'M630.jpg',ser:'13G', BIOS: 'BIOS', des: 'Blade Servers',biosAddress:'GV0FD',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'M630P', src: '',ser:'13G', BIOS: '...', des: 'Blade Servers',biosAddress:'GV0FD',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'FC630', src: 'M630.jpg',ser:'13G', BIOS: 'BIOS', des: 'Blade Servers',biosAddress:'GV0FD',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'FC430', src: 'M630.jpg',ser:'13G', BIOS: 'BIOS', des: 'Blade Servers',biosAddress:'9TM32',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'FM120', src: 'FM120.png',ser:'13G', BIOS: 'BIOS', des: 'Blade Servers',biosAddress:'VT4N5',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'C6320', src: 'C6320.jpg',ser:'13G', BIOS: 'BIOS', des: 'Cloud Servers',biosAddress:'VJTT9',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'C6320P', src: 'C6320.jpg',ser:'13G', BIOS: 'BIOS', des: 'Cloud Servers',biosAddress:'R95GJ',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'T630', src: 'M630.jpg',ser:'13G', BIOS: 'BIOS', des: 'Tower Servers',biosAddress:'X159V',idrac:'',perc:'' ,percAddress:'', }, 
	 
	 
    { name: 'R940', src: 'R940.jpg',ser:'14G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'5KNGY',idrac:'',perc:'' ,percAddress:'', },
    { name: 'R940xa', src: 'R940xa.jpg',ser:'14G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'3P766',idrac:'',perc:'' ,percAddress:'', },
    { name: 'R840', src: 'R840.jpg',ser:'14G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'3P766',idrac:'',perc:'' ,percAddress:'', },
    { name: 'R740', src: 'R740.jpg',ser:'14G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'5KNGY',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'R740XD', src: '',ser:'14G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'5KNGY',idrac:'',perc:'' ,percAddress:'', },
    { name: 'R7415', src: 'R740.jpg',ser:'14G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'RXDY3',idrac:'',perc:'' ,percAddress:'', },
    { name: 'R7425', src: '',ser:'14G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'Y5VPH',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'R6415', src: 'R640.png',ser:'14G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'RXDY3',idrac:'',perc:'' ,percAddress:'', },
    { name: 'R640', src: 'R640.png',ser:'14G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'5KNGY',idrac:'',perc:'' ,percAddress:'', },
    { name: 'R540', src: 'R540.jpg',ser:'14G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'691H6',idrac:'',perc:'' ,percAddress:'', },
    { name: 'R440', src: 'R440.jpg',ser:'14G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'691H6',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'M640', src: 'M630.jpg',ser:'14G', BIOS: 'BIOS', des: 'Blade Servers',biosAddress:'WMMVJ',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'M640P', src: '',ser:'14G', BIOS: 'BIOS', des: 'Blade Servers',biosAddress:'WMMVJ',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'FC640', src: 'M630.jpg',ser:'14G', BIOS: 'BIOS', des: 'Blade Servers',biosAddress:'WMMVJ',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'C6420', src: '',ser:'14G', BIOS: 'BIOS', des: 'Cloud Servers',biosAddress:'J2XG5_',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'T440', src: '',ser:'14G', BIOS: 'BIOS', des: 'Tower Servers',biosAddress:'691H6',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'T640', src: '',ser:'14G', BIOS: 'BIOS', des: 'Tower Servers',biosAddress:'YDRY8',idrac:'',perc:'' ,percAddress:'', },
	
	{ name: 'R920', src: 'R920.png',ser:'12G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'H74YM',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'R820', src: 'R820.png',ser:'12G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'NWJ10',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'R720', src: 'R720.png',ser:'12G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'DYH8T',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'R620', src: 'R620.png',ser:'12G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'NGYCX',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'R520', src: 'R520.png',ser:'12G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'Y5VPT',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'R420', src: 'R420.png',ser:'12G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'33YD8',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'R320', src: 'R320.png',ser:'12G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'V3VM2',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'R220', src: 'R220.png',ser:'12G', BIOS: 'BIOS', des: 'Rack Servers',biosAddress:'MRXVY',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'M520', src: 'M520.png',ser:'12G', BIOS: 'BIOS', des: 'Blade Servers',biosAddress:'YCPHP',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'M420', src: 'M420.png',ser:'12G', BIOS: 'BIOS', des: 'Blade Servers',biosAddress:'DGJP2',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'M620', src: 'M620.png',ser:'12G', BIOS: 'BIOS', des: 'Blade Servers',biosAddress:'9DWNX',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'M820', src: 'M820.png',ser:'12G', BIOS: 'BIOS', des: 'Blade Servers',biosAddress:'F2J98',idrac:'',perc:'' ,percAddress:'', },
	{ name: 'T320', src: 'T320.png',ser:'12G', BIOS: 'BIOS', des: 'Tower Servers',biosAddress:'HF03K',idrac:'',perc:'' ,percAddress:'', }, 
	{ name: 'T420', src: 'T420.png',ser:'12G', BIOS: 'BIOS', des: 'Tower Servers',biosAddress:'4R1WW',idrac:'',perc:'' ,percAddress:'', }, 
	{ name: 'T620', src: 'T620.png',ser:'12G', BIOS: 'BIOS', des: 'Tower Servers',biosAddress:'M9WW3',idrac:'',perc:'' ,percAddress:'', }, 
	
];

var oUl = document.getElementById('list');
var oInp = document.getElementById('inp');
var sUl =  document.getElementById('ser');

render(person);


sUl.addEventListener( 'click', function(e){
    if(e.target.tagName == 'BUTTON'){
        state.ser = e.target.getAttribute('ser');
        document.getElementsByClassName('btn btn-primary')[0].className ='btn btn-default';
        e.target.className = 'btn btn-primary';

        //render(filterSer(ser,person));
      render(addFn( obj,person));
    }

})


function filterSer(ser, arr){
    if (ser == 'all' ){
       return arr;

    }else{
      return arr.filter( function(ele,index){

                if (ser == ele.ser){

                    return true;
            }


        })

    }

}



function render(list){
    var str = '';

    list.forEach(function(ele, index){
        var str2 = '',str3 ='',OSsupport ='';
    //    str += '<li>\
    //    <img src="./img/' + ele.src + '" alt="">\
    //    <span class="name">' + ele.name + '</span> \
    //    <span class="des">'+ ele.des + '</span>\
    //      <span class="BP">'+ ele.BP + '</span>\
    //       <span class="PERC">'+ ele.PERC + '</span>\
    //</li>';
		
		
		
		if(ele.ser=='13G'){
			ele.idrac = 'Latest_Firmware_iDRAC8';
			ele.idracAddress = 'CX8N2';
			ele.perc = 'Firmware_PERC:H730/H730P/H830/FD33xS/FD33xD';
			ele.percAddress ='F675Y';
		}else if(ele.ser=='14G'){
			
			ele.idrac = 'Latest_Firmware_iDRAC9';
			ele.idracAddress = 'K877V';
			ele.perc = 'Firmware_PERC:H740P Mini/ H740P Adapter/ H840 Adapte';
			ele.percAddress ='X9N5V';
		}
		else if(ele.ser=='12G'){
			ele.idrac = 'Latest_Firmware_iDRAC7';
			ele.idracAddress = '2GFC7';
			ele.perc = 'Firmware_PERC:H710 Mini monolithic adapter';
			ele.percAddress ='KKR9J';
			
		}
        str2 +='<p><ul><li ><a href="https://www.dell.com/support/home/cn/zh/cnbsd1/product-support/product/poweredge-'+ ele.name
                +'/drivers" target="view_window">&nbsp官网驱动| </a>'
                  + '<a href="https://www.dell.com/support/home/cn/zh/cnbsd1/product-support/product/poweredge-'+
                    ele.name+'/manuals" target="view_window">'+'&nbsp手册(HTML)| </a>'
                     + '<a href="https://topics-cdn.dell.com/pdf/poweredge-'+ ele.name+'_owners-manual_zh-cn.pdf" \
                    target="view_window">'+'&nbsp手册(PDF)| </a>'
            + '<a href="https://www.dell.com/support/home/cn/zh/cnbsd1/product-support/product/poweredge-'+ ele.name+'/upgrade" target="view_window">'+'&nbsp扩展硬件| </a>';
		OSsupport += '<a href="https://www.dell.com/support/home/us/en/04/Drivers/SupportedOS/poweredge-'+ ele.name+' " target="view_window">'+'&nbsp系统支持| </a></li >';
        str3 +='<li ><a href="https://www.dell.com/support/home/cn/zh/cnbsd1/drivers/driversdetails?driverId='+ ele.biosAddress +'" target="view_window">Latest_Firmware_BIOS_'+ ele.name+'</a></li><li ><a href="https://www.dell.com/support/home/cn/zh/cnbsd1/drivers/driversdetails?driverId='+ele.idracAddress+'" target="view_window">'+ele.idrac+'  </a></li><li ><a href="https://www.dell.com/support/home/cn/zh/cnbsd1/drivers/driversdetails?driverId='+ele.percAddress+'" target="view_window">'+ele.perc+'  </a></li></ul>';
		
         str += '<div class="panel-heading" class="panel-title"  data-toggle="collapse" data-parent="#accordion" href="#'+ele.name+'">\
                  <li>\
                                 <img src="./img/' +ele.name+'.png" alt="">\
                                 <span class="name">' + ele.name + '</span> \
                                  <span class="des">'+ ele.des + '</span>\
                            </li>\
                 </div>\
                <div id="'+ele.name+'" class="panel-collapse collapse ">\
                    <div class="panel-body">\
                    '+str2+OSsupport+str3 + '\
                    </div>\
                </div>'



    });
      oUl.innerHTML = str;
}

function debounce(handle,delay){
    var timer;
    return function () {
        var self = this;  //当前键盘输入值；
        var arg = arguments;  //输入进来组合成的伪数组
        clearTimeout(timer);
        timer = setTimeout(function(){
            //handle.valueOf(arg);
            handle.apply(self,arg);  //改变input指向

            //console.log(self,arg);
        },delay);
    }
}
oInp.oninput = debounce(event,1000);




function event(){
    state.text = this.value;

    //render(filterText(text,person));
    render(addFn( obj,person));
}

function filterText(val,arr){
    var fArr = arr.filter(function(ele,index) {
        if (ele.name.indexOf(val) !== -1) // indexOf( val)
            return true;

    });
    //console.log(fArr);
    return fArr;

}

// lastArr 上一次返回的数组  初始lastArr = person;


//筛选条件

var obj = {
    text: filterText,
    ser: filterSer
}
// 筛选条件：
var state = {
    text:'',
    ser:'all'
}

function addFn( obj,arr){
    var lastArr = arr;
    //prop 代表属性名：来确定是filterText 还是filterSer;
    for(var prop in obj){
        lastArr =  obj[prop](state[prop],lastArr);

    }
    return lastArr;
}


//oInp.oniput = function () {
//    var text = this.value;
//    console.log(text);
//    filterText ();
//}

