function roles_fun(){

$(document).ready(function(){
    const user_rol = {!! json_encode(session()->get('rol')->first()) !!};
    //(ocultarMostrar)();
    if(user_rol=="Supremo"){
        $("#listts").show("slow");
        $("#añadir_us").show("slow");
        $("#list_add").show("slow");                    
        $("#list_em").show("slow");
        $("#list_user").show("slow");
        $("#list_glo").show("slow");
        $("#depst").show("slow");
        $("#vias").show("slow");
        $("#vehiculos").show("slow");
        $("#sensor_id").show("slow");
        $("#list_sen").show("slow");
        $("#ubicacion").show("slow");
    }
    if(user_rol=="Admin"){
        $("#listts").show("slow");
        $("#list_em").show("slow");
        $("#list_user").show("slow");
        $("#depst").show("slow");
        $("#vias").show("slow");
        $("#añad_via").show("slow");
        $("#vehiculos").show("slow");
        $("#vehñadir").show("slow");
        $("#sensor_id").show("slow");
        $("#sensor_añ").show("slow");
        $("#list_sen").show("slow");
        $("#ubicacion").show("slow");
        $("#ubicañadir").show("slow");
        $("#estadistic").show("slow");
        $("#formuss").show("slow");
        $("#aforos").show("slow");
        $("#regedit").show("slow");
        $("#esta").show("slow");
        $("#recolec").show("slow");
        $("#demosimulacion").show("slow");
    }
    if(user_rol=="Personal"){
        $("#depts").show("slow");
        $("#vias").show("slow");
        $("#añad_via").show("slow");
        $("#vehiculos").show("slow");
        $("#vehñadir").show("slow");
        $("#sensor_id").show("slow");
        $("#sensor_añ").show("slow");
        $("#list_sen").show("slow");
        $("#ubicacion").show("slow");
        $("#ubicañadir").show("slow");
        $("#estadistic").show("slow");
        $("#formuss").show("slow");
        $("#aforos").show("slow");
        $("#regedit").show("slow");
        $("#esta").show("slow");
        $("#recolec").show("slow");
    }
    if(user_rol=="Usuario"){
        $("#depst").show("slow");
        $("#vias").show("slow");
        $("#vehiculos").show("slow");
        $("#sensor_id").show("slow");
        $("#list_sen").show("slow");
        $("#ubicacion").show("slow");
        $("#ubicañadir").show("slow");
        $("#formuss").show("slow");
        $("#aforos").show("slow");
        $("#regedit").show("slow");
        $("#esta").show("slow");
        $("#recolec").show("slow");
        $("#demosimulacion").show("slow");
    }
});
}