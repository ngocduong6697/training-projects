const API_KEY = 'zHfQL349xq44jnwlV2mP0nETFVVwjqJo';
const API_URL = 'http://api.giphy.com/v1/gifs/'
const API_LIMIT = 25;

$(() => {
    
    var currentIndexLoadMore = 1;

    document.getElementById('search__engine-button').addEventListener('click', function () {
                                   
        var selectedName = $('.search__engine-input').val();
        if (selectedName) {
            document.getElementById('library').style.display = 'block';  
            loading();
            var xhr = $.get(`${API_URL}search?q=${selectedName}&api_key=${API_KEY}&limit=${API_LIMIT}`);
            xhr.done(function (data) {                
                if (data.data.length === 0) {
                    loading();
                } else {
                    console.log("success got data", data);
                    dataGif = renderGif(data.data);                
                    $('.library').html(dataGif);                      
                }
            });
        } else {
            loading();
        }
    });

    function renderGif(data) {        
        var tmp = '';
        for (var i = 0; i < data.length; i++) {
            tmp += `<div class="library__images js_library__image" data-id="${data[i].id}"><img class="library__images-img"src="${data[i].images.fixed_width.url}" alt=""></div>`;
        }
        document.getElementById('loadmore').style.display = 'block';
        return tmp;
    }
    
    // LOAD MORE
    $(document).ready(function () {
        
        $(document).on('click', '#loadmore__btn', function (e) {            
            e.preventDefault();
            var last_gif_id = $('.search__engine-input').val();
            currentIndexLoadMore++;
            $.ajax({
                url: `${API_URL}search?q=${last_gif_id}&api_key=${API_KEY}&limit=${API_LIMIT * currentIndexLoadMore}`,
                method: 'POST',
                success: function (data) {
                    console.log(data);
                    for (var i = ((currentIndexLoadMore - 1) * API_LIMIT); i < data.data.length; i++) {
                        var item = data.data[i];
                        var tmp = `<div class="library__images js_library__image" data-id="${item.id}"><img class="library__images-img"src="${item.images.fixed_width.url}" alt=""></div>`;
                        $('.library').append(tmp);
                    }
                }
            })
        })
    })

    // LOADING
    var loading = function () {
        var myLoad = document.getElementById('loading'),
            show = function () {
                myLoad.style.display = 'block';
                setTimeout(hide, 1000);
            },
            hide = function () {
                myLoad.style.display = 'none';                
            };            
        show();
    }        


    // open popup    
    $('#JPO').popup({       
      });
         
    $(document).on('click', '.js_library__image', function () {        
        console.log($(this).data('id'))
        var idGif = $(this).data('id');
        // call api get image with id of gif
        var url = $(this).data('url');
        
        $('#JPO_remove-gif').html('');
        $.ajax({
            url: `${API_URL}${idGif}?api_key=${API_KEY}`,
            method: 'POST',
            success: function (data) {    
                console.log(data);
                var newItem = data.data;  
                var url = `${newItem.images.fixed_width.url}`;
                var tmp = `<div class="library__images js_library__image" data-id="${data.id}"><img class="library__images-img" src="${url}" alt=""></div>`;
                $('#JPO_remove-gif').append(tmp);                         
            }
            
        })
        // copy image
        var $temp = $("<input>");           
        $('.JPO_copyURL').on('click', function () {
            var parent = $(this).parent();
            var image = parent.find('.library__images-img');
            var url = image.attr('src');            
            $("body").append($temp);
            $temp.val(url).select();
            document.execCommand("copy");
            $temp.remove();
            
            $('.JPO_copyURL').text("URL copied!");            
            document.getElementById('JPO_copyURL').style.color = 'red';
        })
        
        // set again text copy
        $('.JPO_close').on('click', function () {                           
            document.getElementById('JPO_copyURL').style.color = 'black';
            $('.JPO_copyURL').text("Get URL to Copy!");
                        
        })
    })      
});

