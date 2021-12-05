const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');
// console.log(tabs, panes);
const tabActive = $('.tab-item.active');
const line = $('.tabs .line');
// console.log([line])

//Set initial line width by the first elements' values of tabs
line.style.left = tabActive.offsetLeft + "px"; //gán style css offsetLeft cho element nào có 2 class .tab-item.active
line.style.width = tabActive.offsetWidth + "px";

 tabs.forEach(function(tab, index) {
     //mỗi khi click vào tab-item sẽ lấy ra đc tab-pane tg ứng dựa vào index
    const pane = panes[index] //panes trả về 1 nodelist giống arr nên có thể panes[index]
    //declaration function
    //   tab.onclick = function (e) {
    //      //trc khi add class="active" thì tìm element nào có class="active " thì xoá class đó đi
    //      $('.tab-item.active').classList.remove('active')
    //      this.classList.add('active')
    //  }

    //arow function k dùng đc this
    tab.onclick = (e) => {
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        line.style.left = e.currentTarget.offsetLeft + "px";
        line.style.width = e.currentTarget.offsetWidth + "px";

        e.currentTarget.classList.add('active');
        pane.classList.add('active');
    }
 })

// var arr = [];
// var subIndex=0;
//lưu những hành động hay khối lệnh của onclick đối với mỗi element vào một mảng
//sau đó sử dụng vòng lặp setInterval cho chạy các hành động trong mảng hành động đó. Nếu nó đến cuối mảng thì mình quay lại vị trí ban đầu
// setInterval(function() {
//     arr[subIndex]();
//     subIndex++;
//     if(subIndex>arr.length-1) subIndex=0;
// },2000) // Thêm tự động chuyển tab-item

 //function bt khi click this sẽ trả về tab, con dùng arrow func sẽ trả về window
 //đác tính của arrow function , this luôn bằng giá trị của func ở ngoài, nên tránh dùng arrow func khi muốn dùng this 
 // Bind kiểu như 1 hàm dùng lại nhiều lần để select 1 element

 
// tabs.forEach ( (tab, index) => {
//     tab.addEventListener('click', () =>{        
       
//         //Remove active css class at any element in tabs
//         tabs.forEach ( (tab) => {            
//             if (tab.classList.contains('active')){
//                 tab.classList.remove('active');                
//             }
//         })

//         //Remove active css class at any element in panels
//         panels.forEach ( (panel) => {
//             if (panel.classList.contains('active')){
//                 panel.classList.remove('active')
//             }
//         })

//         //Add active css classes in the clicked tab and panel
//         tab.classList.add('active');
//         panels[index].classList.add('active');
//         line.style.width = tab.offsetWidth + 'px';
//         line.style.left = tab.offsetLeft + 'px';
        
//     })
// })

// VD
// var myButton = {
//     content: 'OK',
//     click() {
//       console.log(this.content + ' clicked');
//     }
//   };
  
//   //Khi gọi click() từ myButton
//   myButton.click(); //nó sẽ in ra 'OK clicked', tại vì this lúc này đang là myButton
  
//   //Khi mình gán phương thức click cho 1 biến mới là looseClick
//   var looseClick = myButton.click;
  
//   //Sau đó mình gọi looseClick() như bình thường
//   looseClick(); //Thì lúc này nó lại in ra là 'undefined clicked'
//   //Vì lúc này this nó không phải là myButton nữa, nếu bạn tìm thiểu thì this lúc này là globalThis
  
//   //Phương thức bind() sẽ đặt this là cái mà các bạn truyền vào bên trong bind()
//   //Nên khi mình gán cho 1 biến mới là boundClick
//   var boundClick = myButton.click.bind(myButton);
  
//   //và gọi boundClick()
//   boundClick(); //Thì nó sẽ in ra 'OK, clicked', bơi vì 'this' lúc này chính là myButton
  
  //Tương tự như document.querySelector() cũng vậy
  //Khi gọi phương thức này thông thường thì this đang là document
  //Khi mình gán phương thức này cho 1 biến khác thì phải dùng bind để nó hiểu được this vẫn là document
  //Do vậy sẽ là: var $ = document.querySelector.bind(document)