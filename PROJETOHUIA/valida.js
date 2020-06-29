$(document).ready(function(){
    $('#inputCRM').mask("0000000");

$("#formLogin").validate({


    
        rules:{
            crm:{
                required: true,
                maxlength: 7,
                minlength: 7,
            },
            uf:{
                required: true
            }
        },
        messages: {
            crm:{
                required: "É obrigatório preencher o CRM, digite apenas números.",
                maxlength: "O campo CRM não pode ser maior que 7 caracteres.",
                minlength: "O campo CRM não pode ser menor que 7 caracteres.",
                
                
            },
            uf: {
                required: "Você deve selecionar um estado no campo UF."
            }

            
        },
        
        errorLabelContainer: "#listaErros",
        errorElement: "li",
        

    
        submitHandler: function(form){
            $.alert({
                message: "<strong>Sucesso!</strong>"
                
            },{
                type: 'success',
                delay: 500
            });

            $.alert({
                message: "<strong>Você está sendo redirecionado...</strong>"
            },{
                delay:5000
            })
            var delay=5000;
            setTimeout(function(){
                
                <form method="GET" action="https://huia.com.br/"></form>
            },delay)

        }
    });

    
});