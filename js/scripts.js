// 화면 숨기는 함수
function main_VH_hide() {
    document.getElementById("container-total-list").style.display="none";
    document.getElementById("container-MP-calculator").style.display="none";
    document.getElementById("container-pure-MP-calculator").style.display="none";
    var con = document.getElementById("container-main-VH");
    if(con.style.display=="none") con.style.display="block";
    else con.style.display="none";
}
function MP_calculator_hide() {
    document.getElementById("container-main-VH").style.display="none";
    document.getElementById("container-pure-MP-calculator").style.display="none";
    var con = document.getElementById("container-MP-calculator");
    var box = document.getElementById("container-total-list");
    if(con.style.display=="none") {
        con.style.display="block";
        box.style.display="block";
    }
    else {
        con.style.display="none";
        box.style.display="none";
    }
}
function pure_MP_calculator_hide() {
    document.getElementById("container-main-VH").style.display="none";
    document.getElementById("container-MP-calculator").style.display="none";
    var con = document.getElementById("container-pure-MP-calculator");
    var box = document.getElementById("container-total-list");
    if(con.style.display=="none") {
        con.style.display="block";
        box.style.display="block";
    }
    else {
        con.style.display="none";
        box.style.display="none";
    }
}

// 베리하드 케릭터 사진
function getVHCharacterView(picture_src) {
    var getID = document.getElementById("character-main-VH-list-select");
    var stage = getID.options[getID.selectedIndex].value;

    if(stage=="default_character"){
        document.getElementById("preset-character-image").src=picture_src+"/Placeholder.webp" 
        document.getElementById("preset-character-name-label").innerText="";
    }
    if(stage=="VH18-1"){
        document.getElementById("preset-character-image").src=picture_src+"/페코린느3성.webp" 
        document.getElementById("preset-character-name-label").innerText="페코린느";

    }
    if(stage=="VH18-2"){
        document.getElementById("preset-character-image").src=picture_src+"/콧코로3성.webp" 
        document.getElementById("preset-character-name-label").innerText="콧코로";
    }
    if(stage=="VH18-3"){
        document.getElementById("preset-character-image").src=picture_src+"/캬루3성.webp" 
        document.getElementById("preset-character-name-label").innerText="캬루";
    }
    if(stage=="VH19-1"){
        document.getElementById("preset-character-image").src=picture_src+"/리노3성.webp" 
        document.getElementById("preset-character-name-label").innerText="리노";
    }
    if(stage=="VH19-2"){
        document.getElementById("preset-character-image").src=picture_src+"/리마3성.webp" 
        document.getElementById("preset-character-name-label").innerText="리마";
    }
    if(stage=="VH19-3"){
        document.getElementById("preset-character-image").src=picture_src+"/이오3성.webp" 
        document.getElementById("preset-character-name-label").innerText="이오";
    }
    if(stage=="VH20-1"){
        document.getElementById("preset-character-image").src=picture_src+"/유카리3성.webp" 
        document.getElementById("preset-character-name-label").innerText="유카리";
    }
}
// 베리하드 공략글 이동
function moveVHpage(folder_src){
    var getID = document.getElementById("character-main-VH-list-select");
    var stage = getID.options[getID.selectedIndex].value;

    if(stage=="VH18-1")location.href=folder_src+"/18-1.html";
    if(stage=="VH18-2")location.href=folder_src+"/18-2.html";
    if(stage=="VH18-3")location.href=folder_src+"/18-3.html";
    if(stage=="VH19-1")location.href=folder_src+"/19-1.html";
    if(stage=="VH19-2")location.href=folder_src+"/19-2.html";
    if(stage=="VH19-3")location.href=folder_src+"/19-3.html";
    if(stage=="VH20-1")location.href=folder_src+"/20-1.html";
}

//하드 피스 케릭터 사진 + 계산기 표시
function getPieceCharacterView(){
    var getID = document.getElementById("character-MemoryPeiece-list-select");
    var stage = getID.options[getID.selectedIndex].value;

    document.getElementById("peko_HD_checkbox").style.display="none";
    document.getElementById("koko_HD_checkbox").style.display="none";
    document.getElementById("karyl_HD_checkbox").style.display="none";
    document.getElementById("rino_HD_checkbox").style.display="none";
    document.getElementById("rima_HD_checkbox").style.display="none";
    document.getElementById("io_HD_checkbox").style.display="none";
    document.getElementById("yukari_HD_checkbox").style.display="none";

    if(stage=="default_character"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/Placeholder.webp";
        document.getElementById("preset-HD-character-name-label").innerText="";
    }
    if(stage=="VH18-1"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/페코린느3성.webp" ;
        document.getElementById("preset-HD-character-name-label").innerText="페코린느";
        document.getElementById("peko_HD_checkbox").style.display="block";
    }
    if(stage=="VH18-2"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/콧코로3성.webp" ;
        document.getElementById("preset-HD-character-name-label").innerText="콧코로";
        document.getElementById("koko_HD_checkbox").style.display="block";
    }
    if(stage=="VH18-3"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/캬루3성.webp" ;
        document.getElementById("preset-HD-character-name-label").innerText="캬루";
        document.getElementById("karyl_HD_checkbox").style.display="block";
    }
    if(stage=="VH19-1"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/리노3성.webp" ;
        document.getElementById("preset-HD-character-name-label").innerText="리노";
        document.getElementById("rino_HD_checkbox").style.display="block";
    }
    if(stage=="VH19-2"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/리마3성.webp" ;
        document.getElementById("preset-HD-character-name-label").innerText="리마";
        document.getElementById("rima_HD_checkbox").style.display="block";
    }
    if(stage=="VH19-3"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/이오3성.webp" ;
        document.getElementById("preset-HD-character-name-label").innerText="이오";
        document.getElementById("io_HD_checkbox").style.display="block";
    }
    if(stage=="VH20-1"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/유카리3성.webp"; 
        document.getElementById("preset-HD-character-name-label").innerText="유카리";
        document.getElementById("yukari_HD_checkbox").style.display="block";
    }

    location.href="#container-MP-calculator";
}
//베리 하드 피스 케릭터 사진 + 계산기 표시
function getPurePieceCharacterView(){
    var getID = document.getElementById("character-PureMemoryPeiece-list-select");
    var stage = getID.options[getID.selectedIndex].value;

    if(stage=="default_character"){
        document.getElementById("preset-pure-HD-character-image").src="priconne-images/unit-icon/Placeholder.webp"; 
        document.getElementById("preset-pure-HD-character-name-label").innerText="";
    }
    if(stage=="VH18-1"){
        document.getElementById("preset-pure-HD-character-image").src="priconne-images/unit-icon/페코린느3성.webp" ;
        document.getElementById("preset-pure-HD-character-name-label").innerText="페코린느";
    }
    if(stage=="VH18-2"){
        document.getElementById("preset-pure-HD-character-image").src="priconne-images/unit-icon/콧코로3성.webp" ;
        document.getElementById("preset-pure-HD-character-name-label").innerText="콧코로";
    }
    if(stage=="VH18-3"){
        document.getElementById("preset-pure-HD-character-image").src="priconne-images/unit-icon/캬루3성.webp" ;
        document.getElementById("preset-pure-HD-character-name-label").innerText="캬루";
    }
    if(stage=="VH19-1"){
        document.getElementById("preset-pure-HD-character-image").src="priconne-images/unit-icon/리노3성.webp" ;
        document.getElementById("preset-pure-HD-character-name-label").innerText="리노";
    }
    if(stage=="VH19-2"){
        document.getElementById("preset-pure-HD-character-image").src="priconne-images/unit-icon/리마3성.webp" ;
        document.getElementById("preset-pure-HD-character-name-label").innerText="리마";
    }
    if(stage=="VH19-3"){
        document.getElementById("preset-pure-HD-character-image").src="priconne-images/unit-icon/이오3성.webp" ;
        document.getElementById("preset-pure-HD-character-name-label").innerText="이오";
    }
    if(stage=="VH20-1"){
        document.getElementById("preset-pure-HD-character-image").src="priconne-images/unit-icon/유카리3성.webp" ;
        document.getElementById("preset-pure-HD-character-name-label").innerText="유카리";
    }

    location.href="#container-pure-MP-calculator";
}
// 하드 피스 계산기 버튼
function calculatePiece(){
    document.getElementById("MP-calculate-result").style.display="block";

    var getID = document.getElementById("character-MemoryPeiece-list-select");
    var stage = getID.options[getID.selectedIndex].value;

    if(stage=="VH18-1"){
        var checked_num = $('input:checkbox[name="peko-checkbox"]:checked').length;
        var times = $('input:radio[name="peko-times"]:checked').val();
        var isfull = $('input:checkbox[name="peko-reset"]').is(':checked');
        var full = 1; if(isfull) full = 2;
        var days = document.getElementById('peko-days').value;

        document.getElementById('MP-days').innerText = String(days);
        document.getElementById('MP-num').innerText = String(3*days*full*checked_num*times/2);
        document.getElementById('MP-jewelnum').innerText = String(0);
        if($('input:checkbox[name="peko-reset"]').is(':checked')) document.getElementById('MP-jewelnum').innerText = String(checked_num * 50 * days);
    }
    if(stage=="VH18-2"){ 
        var checked_num = $('input:checkbox[name="koko-checkbox"]:checked').length;
        var times = $('input:radio[name="koko-times"]:checked').val();
        var isfull = $('input:checkbox[name="koko-reset"]').is(':checked');
        var full = 1; if(isfull) full = 2;
        var days = document.getElementById('koko-days').value;

        document.getElementById('MP-days').innerText = String(days);
        document.getElementById('MP-num').innerText = String(3*days*full*checked_num*times/2);
        document.getElementById('MP-jewelnum').innerText = String(0);
        if($('input:checkbox[name="koko-reset"]').is(':checked')) document.getElementById('MP-jewelnum').innerText = String(checked_num * 50 * days);
    } 
    if(stage=="VH18-3"){
        var coin = $('input:radio[name="karyl-place"]:checked').val();
        var times = $('input:radio[name="karyl-times"]:checked').val();
        var days = document.getElementById('karyl-days').value;
        var piecefive = parseInt(parseInt(coin * times * days * 5)/5);
        document.getElementById('MP-days').innerText = String(days);
        document.getElementById('MP-num').innerText = String(piecefive*5);
        document.getElementById('MP-jewelnum').innerText = String(0);
    }
    if(stage=="VH19-1"){
        var coin = document.getElementById("rino-timecoin").value;
        var days = document.getElementById('rino-days').value;
        var piece = parseInt(parseInt(coin * 24 * days)/800);
        document.getElementById('MP-days').innerText = String(days);
        document.getElementById('MP-num').innerText = String(piece * 5);
        document.getElementById('MP-jewelnum').innerText = String(0);
    }
    if(stage=="VH19-2"){
        var checked_num = $('input:checkbox[name="rima-checkbox"]:checked').length;
        var times = $('input:radio[name="rima-times"]:checked').val();
        var isfull = $('input:checkbox[name="rima-reset"]').is(':checked');
        var full = 1; if(isfull) full = 2;
        var days = document.getElementById('rima-days').value;

        document.getElementById('MP-days').innerText = String(days);
        document.getElementById('MP-num').innerText = String(3*days*full*checked_num*times/2);
        document.getElementById('MP-jewelnum').innerText = String(0);
        if($('input:checkbox[name="rima-reset"]').is(':checked')) document.getElementById('MP-jewelnum').innerText = String(checked_num * 50 * days);
    }
    if(stage=="VH19-3"){
        var coin = $('input:radio[name="io-rank"]:checked').val();
        var days = document.getElementById('io-clearnum').value;
        var stage = document.getElementById('io-stage').value;
        var piece = parseInt((30 * stage + coin * days) / 800);
        document.getElementById('MP-days').innerText = String(days*30);
        document.getElementById('MP-num').innerText = String(piece * 5);
        document.getElementById('MP-jewelnum').innerText = String(0);
    }
    if(stage=="VH20-1"){
        var coin = $('input:radio[name="yukari-place"]:checked').val();
        var times = $('input:radio[name="yukari-times"]:checked').val();
        var days = document.getElementById('yukari-days').value;
        var piecefive = parseInt(parseInt(coin * times * days * 5)/5);
        document.getElementById('MP-days').innerText = String(days);
        document.getElementById('MP-num').innerText = String(piecefive*5);
        document.getElementById('MP-jewelnum').innerText = String(0);
    }
}
// 퓨어피스 계산
function calculatePurePiece(){
    document.getElementById("PMP-calculate-result").style.display="block";

    var times = $('input:radio[name="pure-character-times"]:checked').val();
    var isfull = $('input:checkbox[name="pure-character-reset"]').is(':checked');
    var full = 1; if(isfull) full = 2;
    var days = document.getElementById('pure-character-days').value;
    document.getElementById('PMP-days').innerText = String(days);
    document.getElementById('PMP-num').innerText = String(parseInt(3*times*full*days/2));
    document.getElementById('PMP-jewelnum').innerText = String(0);
    if($('input:checkbox[name="pure-character-reset"]').is(':checked')) document.getElementById('PMP-jewelnum').innerText = String(50 * days);
}

// total 추가 버튼
function addTotalDays_piece(){
    var days = document.getElementById("MP-days").innerText;
    var total = document.getElementById("total-days");
    document.getElementById("total-days").value = parseInt(total.value) + parseInt(days);
}
function addTotalDays_pure(){
    var days = document.getElementById("PMP-days").innerText;
    var total = document.getElementById("total-days");
    document.getElementById("total-days").value = parseInt(total.value) + parseInt(days);
}
function addTotalNum_piece(){
    var num = document.getElementById("MP-num").innerText;
    var total = document.getElementById("piece-total-num");

    var getID = document.getElementById("character-MemoryPeiece-list-select");
    var stage = getID.options[getID.selectedIndex].value;

    if(stage=="VH18-1"){
        var charact = document.getElementById("piece-peko-total-num");
        document.getElementById("piece-peko-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    if(stage=="VH18-2"){
        var charact = document.getElementById("piece-koko-total-num");
        document.getElementById("piece-koko-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    if(stage=="VH18-3"){
        var charact = document.getElementById("piece-karyl-total-num");
        document.getElementById("piece-karyl-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    if(stage=="VH19-1"){
        var charact = document.getElementById("piece-rino-total-num");
        document.getElementById("piece-rino-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    if(stage=="VH19-2"){
        var charact = document.getElementById("piece-rima-total-num");
        document.getElementById("piece-rima-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    if(stage=="VH19-3"){
        var charact = document.getElementById("piece-io-total-num");
        document.getElementById("piece-io-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    if(stage=="VH20-1"){
        var charact = document.getElementById("piece-yukari-total-num");
        document.getElementById("piece-yukari-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    document.getElementById("piece-total-num").value = parseInt(total.value) + parseInt(num);
}
function addTotalNum_pure(){
    var num = document.getElementById("PMP-num").innerText;
    var total = document.getElementById("pure-total-num");

    var getID = document.getElementById("character-PureMemoryPeiece-list-select");
    var stage = getID.options[getID.selectedIndex].value;

    if(stage=="VH18-1"){
        var charact = document.getElementById("pure-peko-total-num");
        document.getElementById("pure-peko-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    if(stage=="VH18-2"){
        var charact = document.getElementById("pure-koko-total-num");
        document.getElementById("pure-koko-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    if(stage=="VH18-3"){
        var charact = document.getElementById("pure-karyl-total-num");
        document.getElementById("pure-karyl-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    if(stage=="VH19-1"){
        var charact = document.getElementById("pure-rino-total-num");
        document.getElementById("pure-rino-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    if(stage=="VH19-2"){
        var charact = document.getElementById("pure-rima-total-num");
        document.getElementById("pure-rima-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    if(stage=="VH19-3"){
        var charact = document.getElementById("pure-io-total-num");
        document.getElementById("pure-io-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    if(stage=="VH20-1"){
        var charact = document.getElementById("pure-yukari-total-num");
        document.getElementById("pure-yukari-total-num").value = parseInt(num) + parseInt(charact.value);
    }
    document.getElementById("pure-total-num").value = parseInt(total.value) + parseInt(num);
}
function addTotaljewel_piece(){
    var days = document.getElementById("MP-jewelnum").innerText;
    var total = document.getElementById("total-jewelnum");
    document.getElementById("total-jewelnum").value = parseInt(total.value) + parseInt(days);
}
function addTotaljewel_pure(){
    var days = document.getElementById("PMP-jewelnum").innerText;
    var total = document.getElementById("total-jewelnum");
    document.getElementById("total-jewelnum").value = parseInt(total.value) + parseInt(days);
}