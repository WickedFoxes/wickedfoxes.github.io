// 화면 숨기는 함수
function main_VH_hide() {
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
    if(con.style.display=="none") con.style.display="block";
    else con.style.display="none";
}
function pure_MP_calculator_hide() {
    document.getElementById("container-main-VH").style.display="none";
    document.getElementById("container-MP-calculator").style.display="none";
    var con = document.getElementById("container-pure-MP-calculator");
    if(con.style.display=="none") con.style.display="block";
    else con.style.display="none";
}

//하드 피스 케릭터 사진 + 계산기 표시
function getHDCharacterView(){
    var getID = document.getElementById("character-main-HD-list-select");
    var stage = getID.options[getID.selectedIndex].value;

    document.getElementById("peko_HD_checkbox").style.display="none";
    document.getElementById("koko_HD_checkbox").style.display="none";
    document.getElementById("karyl_HD_checkbox").style.display="none";
    document.getElementById("rino_HD_checkbox").style.display="none";
    document.getElementById("rima_HD_checkbox").style.display="none";
    document.getElementById("io_HD_checkbox").style.display="none";
    document.getElementById("yukari_HD_checkbox").style.display="none";

    if(stage=="default_character"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/Placeholder.webp" 
        document.getElementById("preset-HD-character-name-label").innerText="";
    }
    if(stage=="VH18-1"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/페코린느3성.webp" 
        document.getElementById("preset-HD-character-name-label").innerText="페코린느";
        document.getElementById("peko_HD_checkbox").style.display="block";
    }
    if(stage=="VH18-2"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/콧코로3성.webp" 
        document.getElementById("preset-HD-character-name-label").innerText="콧코로";
        document.getElementById("koko_HD_checkbox").style.display="block";
    }
    if(stage=="VH18-3"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/캬루3성.webp" 
        document.getElementById("preset-HD-character-name-label").innerText="캬루";
        document.getElementById("karyl_HD_checkbox").style.display="block";
    }
    if(stage=="VH19-1"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/리노3성.webp" 
        document.getElementById("preset-HD-character-name-label").innerText="리노";
        document.getElementById("rino_HD_checkbox").style.display="block";
    }
    if(stage=="VH19-2"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/리마3성.webp" 
        document.getElementById("preset-HD-character-name-label").innerText="리마";
        document.getElementById("rima_HD_checkbox").style.display="block";
    }
    if(stage=="VH19-3"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/이오3성.webp" 
        document.getElementById("preset-HD-character-name-label").innerText="이오";
        document.getElementById("io_HD_checkbox").style.display="block";
    }
    if(stage=="VH20-1"){
        document.getElementById("preset-HD-character-image").src="priconne-images/unit-icon/유카리3성.webp" 
        document.getElementById("preset-HD-character-name-label").innerText="유카리";
        document.getElementById("yukari_HD_checkbox").style.display="block";
    }

    location.href="#container-MP-calculator";
}

// 베리하드 케릭터 사진 + 계산기 표시
function getVHCharacterView() {
    var getID = document.getElementById("character-main-VH-list-select");
    var stage = getID.options[getID.selectedIndex].value;

    // 이전 캐릭터 창 닫기
    document.getElementById("main-VH-info-18-1").style.display="none";
    document.getElementById("main-VH-info-18-2").style.display="none";
    document.getElementById("main-VH-info-18-3").style.display="none";
    document.getElementById("main-VH-info-19-1").style.display="none";
    document.getElementById("main-VH-info-19-2").style.display="none";
    document.getElementById("main-VH-info-19-3").style.display="none";
    document.getElementById("main-VH-info-20-1").style.display="none";

    if(stage=="default_character"){
        document.getElementById("preset-character-image").src="priconne-images/unit-icon/Placeholder.webp" 
        document.getElementById("preset-character-name-label").innerText="";
    }
    if(stage=="VH18-1"){
        document.getElementById("preset-character-image").src="priconne-images/unit-icon/페코린느3성.webp" 
        document.getElementById("preset-character-name-label").innerText="페코린느";
        document.getElementById("main-VH-info-18-1").style.display="block";
    }
    if(stage=="VH18-2"){
        document.getElementById("preset-character-image").src="priconne-images/unit-icon/콧코로3성.webp" 
        document.getElementById("preset-character-name-label").innerText="콧코로";
        document.getElementById("main-VH-info-18-2").style.display="block";
    }
    if(stage=="VH18-3"){
        document.getElementById("preset-character-image").src="priconne-images/unit-icon/캬루3성.webp" 
        document.getElementById("preset-character-name-label").innerText="캬루";
        document.getElementById("main-VH-info-18-3").style.display="block";
    }
    if(stage=="VH19-1"){
        document.getElementById("preset-character-image").src="priconne-images/unit-icon/리노3성.webp" 
        document.getElementById("preset-character-name-label").innerText="리노";
        document.getElementById("main-VH-info-19-1").style.display="block";
    }
    if(stage=="VH19-2"){
        document.getElementById("preset-character-image").src="priconne-images/unit-icon/리마3성.webp" 
        document.getElementById("preset-character-name-label").innerText="리마";
        document.getElementById("main-VH-info-19-2").style.display="block";
    }
    if(stage=="VH19-3"){
        document.getElementById("preset-character-image").src="priconne-images/unit-icon/이오3성.webp" 
        document.getElementById("preset-character-name-label").innerText="이오";
        document.getElementById("main-VH-info-19-3").style.display="block";
    }
    if(stage=="VH20-1"){
        document.getElementById("preset-character-image").src="priconne-images/unit-icon/유카리3성.webp" 
        document.getElementById("preset-character-name-label").innerText="유카리";
        document.getElementById("main-VH-info-20-1").style.display="block";
    }
    location.href="#main-VH-tittle";
}

// 하드 피스 계산기 버튼
function calculateHDpiece(){
    document.getElementById("MP-calculate-result").style.display="block";

    var getID = document.getElementById("character-main-HD-list-select");
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
}
