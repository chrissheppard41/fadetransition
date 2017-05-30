/**
 * The master module for the Transitions between looks
 *
 * @version 1.0.0
 *
 * @return Json			 The class public objects
 */
function Transition(_parent) {

    return {
        /**
         * This sets up the element wait, it'll return a when that can be used with then in the code line that calls
         * this
         * @param end_cb the callback that'll update the element
         * @returns {*}
         */
        animate: function (end_cb) {
            var _self = this;

            return jQuery.when(_self.swap(end_cb))
                .done(function(a_call) {
                    Log.print("INFO :: Transition :: Done with the animation");
                });
        },
        /**
         * The swap method does the main animation, it'll fade out, then it'll execute the passed in callback and
         * finally it'll fade the screen back in
         * @param end_cb the callback that'll update the element
         */
        swap: function (end_cb) {
            if(typeof end_cb === "function") {
                _parent.fadeOut("fast", function () {
                    end_cb();
                    _parent.fadeIn("fast", function () { });
                });
            }
        }
    };
}

if(typeof module === "object") {
    module.exports = Transition;
}
