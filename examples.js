var examples;

examples = function(log){
    'use strict';

    return {
        simpleValueAssignment: function(){
            var rawParam, copy;

            rawParam = 'The raw value.';
            copy =  rawParam;

            log('rawParam', 'current', rawParam);
            log('copy', 'current', copy);

            rawParam += '  Some new text.';

            log('rawParam', 'new', rawParam);
            log('copy', 'new', copy);
        },

        simpleObjectValueAssignment: function(){
            var rawParam, simpleObject;

            rawParam = 'The raw value.';
            simpleObject =  {
                copy: rawParam
            };

            log('rawParam', 'current', rawParam);
            log('simpleObject.copy', 'current', simpleObject.copy);

            rawParam += '  Some new text.';

            log('rawParam', 'new', rawParam);
            log('simpleObject.copy', 'new', simpleObject.copy);
        },

        constructedObjectValueAssignment: function(){
            var rawParam, constructedObject, ObjectGetter;

            rawParam = 'The raw value.';

            ObjectGetter = function(val){
                this.copy = val;
            };

            constructedObject = new ObjectGetter(rawParam);

            log('rawParam', 'current', rawParam);
            log('constructedObject.copy', 'current', constructedObject.copy);

            rawParam += '  Some new text.';

            log('rawParam', 'new', rawParam);
            log('constructedObject.copy', 'new', constructedObject.copy);
        },

        arrayWrappedValueAssignment: function(){
            var rawParam, arrayWrap;

            rawParam = 'The raw value.';

            arrayWrap = [];

            arrayWrap.push(rawParam);

            log('rawParam', 'current', rawParam);
            log('arrayWrap[0]', 'current', arrayWrap[0]);

            rawParam += '  Some new text.';

            log('rawParam', 'new', rawParam);
            log('arrayWrap[0]', 'new', arrayWrap[0]);
        },

        simpleFunctionAssignment: function(){
            var rawParam;

            rawParam = 'The raw value.';

            log('rawParam', 'current', rawParam);

            function m(val){
                val += '  Some new text.';
            }

            m(rawParam);

            log('rawParam', 'new', rawParam);

        },

        arrayFunctionAssignment: function(){
            var rawArray;

            rawArray = [];
            rawArray.push('The raw value.');

            log('rawArray[0]', 'current', rawArray[0]);

            function m(arr){
                arr[0] += '  Some new text.';
            }

            m(rawArray);

            log('rawArray[0]', 'new', rawArray[0]);

        },

        complexArrayFunctionAssignment: function(){
            var rawArray, rawParam;

            rawParam = 'The raw value.';

            rawArray = [];
            rawArray.push(rawParam);
            rawArray.push('The other value.');


            log('rawParam', 'current', rawParam);
            log('rawArray[0]', 'current', rawArray[0]);
            log('rawArray[1]', 'current', rawArray[1]);


            function m(arr){
                arr[0] += '  Some new text.';
                arr[1] += '  Some other new text.';
            }

            m(rawArray);

            log('rawParam', 'new', rawParam);
            log('rawArray[0]', 'new', rawArray[0]);
            log('rawArray[1]', 'new', rawArray[1]);

        },

        simpleObjectFunctionAssignment: function(){
            var rawObject;

            rawObject = {
                rawParam : 'The raw value.'
            };

            log('rawObject.rawParam', 'current', rawObject.rawParam);

            function m(obj){
                obj.rawParam += '  Some new text.';
            }

            m(rawObject);

            log('rawObject.rawParam', 'new', rawObject.rawParam);
        },

        constructedObjectFunctionAssignment: function(){
            var rawObject, ObjectGetter;


            ObjectGetter = function(val){
                this.rawParam = val;
            };

            rawObject = new ObjectGetter('The raw value.');

            log('rawObject.rawParam', 'current', rawObject.rawParam);

            function m(obj){
                obj.rawParam += '  Some new text.';
            }

            m(rawObject);

            log('rawObject.rawParam', 'new', rawObject.rawParam);
        },

        constructedObjectAltFunctionAssignment: function(){
            var rawObject, ObjectGetter;


            ObjectGetter = function(val){
                this.rawParam = val;
                this.addText = function(text){
                    this.rawParam += text;
                };
            };

            rawObject = new ObjectGetter('The raw value.');

            log('rawObject.rawParam', 'current', rawObject.rawParam);

            function m(obj){
                obj.addText('  Some new text.');
            }

            m(rawObject);

            log('rawObject.rawParam', 'new', rawObject.rawParam);
        },

        constructedObjectAltCallbackFunctionAssignment: function(){
            var rawObject, ObjectGetter;


            ObjectGetter = function(val){
                var self;

                self = this;

                this.rawParam = val;
                this.addText = function(text){
                    self.rawParam += text;
                };
            };

            rawObject = new ObjectGetter('The raw value.');

            log('rawObject.rawParam', 'current', rawObject.rawParam);

            function m(fn){
                fn('  Some new text.');
            }

            m(rawObject.addText);

            log('rawObject.rawParam', 'new', rawObject.rawParam);
        }
    }
}(logManger.log);
