var logManger = function(){
    var outElement;

    return {
        logConfig: {
            setOutElement: function(elementId){
                outElement = document.getElementById(elementId);
            },
            clearOutElement: function(){
                outElement = null;
            }
        },
        log: function(paramName, state, param){
            if(null != outElement){
                outElement.innerHTML += '<tr><td class="name">' + paramName + '</td>'
                    + '<td class="state">' + state + '</td>'
                    + '<td class="value">' + param + '</td></tr>' ;
            }
        }
    }
}();

var blockBuilder = function(logConfig){
    var id_seq = 1;

    return {
        buildValueAssignmentBlock: function(title, exerciser){

            var assignmentTemplate, clone, id;
            id = 'id_' + id_seq++;

            assignmentTemplate = document.querySelector('#valueAssignmentTemplate');
            assignmentTemplate.content.querySelector('h2').innerText = title;
            assignmentTemplate.content.querySelector('code').innerHTML = exerciser.toString();
            assignmentTemplate.content.querySelector('table').id = id;
            clone = document.importNode(assignmentTemplate.content, true);
            document.body.appendChild(clone);
            logConfig.setOutElement(id);
            exerciser(id);
            logConfig.clearOutElement();
        }
    };
}(logManger.logConfig);
