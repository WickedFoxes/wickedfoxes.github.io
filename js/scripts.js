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

function getVHCharacterView() {
    var getID = document.getElementById("character-main-VH-list-select");
    var stage = getID.options[getID.selectedIndex].value;
    
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

function calculateHDpiece(){
    document.getElementById("MP-calculate-result").style.display="block";

    var getID = document.getElementById("character-main-HD-list-select");
    var stage = getID.options[getID.selectedIndex].value;

    if(stage=="VH18-1"){
        alert("1"*"1");
        var num = $("input:checkbox[name=peko-checkbox]:checked").length;
        var times = $(":input:radio[name=times]:checked").value;
        var days = $(":input:number[name=days]").value;
        document.getElementById("MP-days").value = days;
        if($("input:checkbox[name=peko-reset]").is(":checked") == true){
            alert("1"+"1");
            document.getElementById("MP-piecenum").innerText = num * times * days;
            document.getElementById("MP-jewelnum").innerText = "50" * num * days;
        }
        else{
            alert("1"+"1");
            document.getElementById("MP-piecenum").innerText= num * times * "1" / "2";
            document.getElementById("MP-jewelnum").innerText = "0";
        }
    }   
}