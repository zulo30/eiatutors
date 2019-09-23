# Primipedia

Semillero de Frameworks Web | Universidad EIA ![logo eia](https://github.com/EIA-University/LogosEIA/blob/master/assets/png/logo-eia-icon.png?raw=true)

Primipedia es una red social dedicada a monitores y estudiantes que quieran resolver sus dudas académicas...

## Comenzando :rocket:

### Requerimientos
* Django | [https://docs.djangoproject.com/](https://docs.djangoproject.com/)
* Vue | [https://vuejs.org/v2/guide/installation.html](https://vuejs.org/v2/guide/installation.html)
* Mysql Workbench | [https://www.mysql.com/products/workbench/](https://www.mysql.com/products/workbench/)
* Sequel Pro |   [https://www.sequelpro.com](https://www.sequelpro.com)


### Importar Un Proyecto
para correr el proyecto:

1. bajar las dependecias de pyhton con pipenv.
    ```
    pipenv install
    ```
2. bajar las depedencias de frontend con npm.
    ```
    npm install
    ```
4. crear sus variables de entorno. (en windows el comamndo `copy` y en unix-like es `cp`).
    ```
    cp .env.example .env
    ```
5. Generar la llave de encritapción. 
    ```
    php artisan key:generate
    ```
6. Configurar la BD local acorde a su entorno de desarrollo. (En el archico .env  cambiar las variables de entorno).
    ```
    .....

    ENV=dev
    DEBUG=on
    SECRET_KEY=my-secret-key
    DATABASE_URL=postgres://localhost:5432/nombre-de-la-base-de-datos
    
    ....

    ```

7. Migrar la base de datos 
    ```
    pipenv run migrate
    ```

## Uso
 para correr el servidor: 
 ```
 pipenv run server
 ```

## Recursos
* vue mastery | [https://www.vuemastery.com/courses/](https://www.vuemastery.com/courses/) 
* django docs | [https://docs.djangoproject.com/](https://docs.djangoproject.com/)
* setting up django prject like a pro | [https://medium.com/@fceruti/](https://medium.com/@fceruti/setting-up-a-django-project-like-a-pro-a847a9867f9d)
* django-vue integration tutorial | [https://github.com/michaelbukachi/django-vuejs-tutorial/](https://github.com/michaelbukachi/django-vuejs-tutorial/wiki/Django-Vue.js-Integration-Tutorial)
* integrating django and vue using webpack | [https://medium.com/@rodrigosmaniotto/](https://medium.com/@rodrigosmaniotto/integrating-django-and-vuejs-with-vue-cli-3-and-webpack-loader-145c3b98501a)
* django webpack loader | [https://github.com/owais/django-webpack-loader](https://github.com/owais/django-webpack-loader)

### recursos para el front-end
* fontawesome | [https://fontawesome.com/icons?d=gallery&q=plus&m=free](https://fontawesome.com/icons?d=gallery&q=plus&m=free)
* boostrap docs | [https://getbootstrap.com/docs](https://getbootstrap.com/docs/4.3/getting-started/introduction/)

## Contribuir:
Por favor lee el [CONTRIBUTING.md]() para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.
## Licencia:
Este proyecto está licenciado bajo la Licencia MIT License  - vea el archivo [LICENSE.md]() para más detalles




