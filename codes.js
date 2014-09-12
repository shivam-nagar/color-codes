/**
 * Created with JetBrains WebStorm.
 * User: shivam
 * Date: 26/12/13
 * Time: 9:55 AM
 * To change this template use File | Settings | File Templates.
 */

var codes = new Array('abased','abases','abbess','abided','abides','abodes','acacia','accede','access','acedia','acidic','addled','afield','aisles','albedo','alibis','allele','allied','allies','assail','assess','babble','babied','babies','baffle','bailed','bailie','balada','balboa','ballad','balled','balsas','basics','basses','beaded','beadle','bedded','beefed','befall','befell','befool','belied','belief','belies','belles','beside','besoil','biased','biases','bibbed','bibles','bifold','billed','bladed','blades','bleeds','bloods','bobbed','bobbie','bobble','bodice','bodied','bodies','boiled','bolded','bolide','boobed','boobie','booboo','boodle','bossed','bosses','cabala','cabbie','cabled','cables','caccia','caddie','caddis','caille','calcic','calico','called','casaba','cassia','ceased','ceases','ceiled','celiac','celled','cicada','cicala','cliffs','cloaca','closed','closes','coaled','cobble','coddle','coffee','coifed','coiled','colica','collie','cooled','dabbed','dabble','daboia','dadoed','daedal','debase','decade','decals','decide','decode','deeded','deface','defial','defied','defies','defile','deific','desole','diable','diablo','dialed','dibble','diesel','diesis','diodes','discos','dissed','doable','docile','doless','doodad','doodle','doolie','dossal','eddied','eddies','edible','efface','elided','fabled','fables','facade','facial','facias','facies','facile','faddle','faecal','faeces','failed','fasces','fascia','feeble','felled','felsic','feodal','fiasco','fibbed','fiddle','fields','filial','filled','fiscal','fleece','floods','foaled','foeces','foible','foiled','folded','fooled','fossil','icicle','ideals','iodide','labels','labial','labile','laddie','ladies','ladled','ladles','laical','lasses','lassie','leaded','leafed','leased','leases','lessee','liable','liaise','libido','lilacs','lilies','loaded','loafed','locale','locals','loosed','looses','losses','obsess','office','oldies','oodles','sables','saddle','sailed','salade','salads','scalds','scaled','scales','scoffs','scolds','seabee','sealed','secede','seeded','sidled','sidles','siffle','silica','sliced','slices','slides','sobbed','social','soiled','solace','soleil','solids');
$(document).ready(function(){
    codes.sort(function(x,y){
        var xHue = rgbToHsl(x);
        var yHue = rgbToHsl(y);
        return xHue-yHue;
    });
    for(var i=0;i<codes.length;i++){
        var code = codes[i];
        code = code.replace(/s/g,"5");
        code = code.replace(/o/g,"0");
        code = code.replace(/l/g,"1");
        code = code.replace(/i/g,"1");

        console.log(codes[i]+"->"+code + "["+rgbToHsl(codes[i])+"]");
        $('#lastrow').append('<div class="col-md-2">'+
        						'<div class="text">&nbsp;&nbsp;&nbsp;'+codes[i].toUpperCase()+'</div>'+
        						'<div class="code">#'+code.toUpperCase()+'</div>'+
        						'<div class="colorDiv" style="background:#'+code+';" title="'+code+'"></div>'+
        					 '</div>');
        if(i%6 == 0){
            $("#lastrow").attr("id","");
            $('#codes').append('</div><div class="row demo-row" id="lastrow">');
        }
        $("#codesBar").append('<div class="colorLineDiv BarBox" style="background:#'+code+';" title="'+code+'"></div>');

    }
    $('#codes').append('</div>');
    $('.col-md-2').hover(function(){
    	$(this).find('div .code').css("display","inline");
    }, function(){

    });
});
function rgbToHsl(color){
    color = color.replace(/s/g,"5");
    color = color.replace(/o/g,"0");
    color = color.replace(/l/g,"1");
    color = color.replace(/i/g,"1");

    var r = parseInt(color.substr(0,2), 16); // Grab the hex representation of red (chars 1-2) and convert to decimal (base 10).
    var g = parseInt(color.substr(2,2), 16);
    var b = parseInt(color.substr(4,2), 16);

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return h*360/3.14;
}
