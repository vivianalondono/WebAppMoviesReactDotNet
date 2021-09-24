import * as Yup from "yup";

export default function configurateValidations(){
    Yup.addMethod(Yup.string, 'firstCapitalLetter', function(){
        return this.test('firstCapitalLetter', 'La primera letra debe ser mayúscula',
        function(valor){
            if(valor && valor.length > 0){
                const firstLetter = valor.substring(0,1);
                return firstLetter === firstLetter.toUpperCase();
            }
            return true;
        })
    })
}