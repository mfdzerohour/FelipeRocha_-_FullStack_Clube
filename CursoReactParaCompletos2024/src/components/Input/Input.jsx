function Input(props){
    return(
        <input
            // type={props.type}
            // placeholder={props.placeholder}
            className="border 
                    border-slate-300 
                    outline-slate-400 
                    px-4 py-2 rounded-md 
                    focus:ring-slate-500 
                    focus:ring-2 
                    focus:outline-none"
            // value={props.value}
            // onChange={props.onChange}
            {...props}

            //Da para melhorar a parte comentada acima mais ainda.

            //Explicação
            //O {...props} é chamado de spread operator em React. Ele pega todas as propriedades (props) recebidas pelo componente e as repassa para o elemento <input>.

            //Por exemplo, se você usar o componente assim:
            //<Input type="text" placeholder="Digite algo" value={valor} onChange={handleChange} maxLength={10} />

            //O {...props} faz com que todas essas propriedades (type, placeholder, value, onChange, maxLength, etc.) sejam automaticamente adicionadas ao <input>, sem precisar escrever cada uma manualmente.

            //Em resumo:

            //{...props} evita repetição de código.
            //Permite que qualquer prop passada para <Input /> seja aplicada ao <input>.
            //Se você definir type={props.type} e também usar {...props}, o valor de {...props} sobrescreve o anterior se houver conflito.

            //Exemplo expandido:
            //<input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} maxLength={props.maxLength} />

            //É igual a isso:
            //<input {...props} />

            //Assim, seu componente fica mais flexível e reutilizável!
        />
    );
}

export default Input;