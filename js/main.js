document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    var modal = document.querySelectorAll('.modal');
    var instances_modal = M.Modal.init(elems);

    var gallery = document.querySelectorAll('.materialboxed');
    var instances_gallery = M.Materialbox.init(gallery);
});