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

tabs.forEach(function (tab, index) {
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