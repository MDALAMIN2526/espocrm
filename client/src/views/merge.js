/************************************************************************
 * This file is part of EspoCRM.
 *
 * EspoCRM - Open Source CRM application.
 * Copyright (C) 2014-2022 Yurii Kuznietsov, Taras Machyshyn, Oleksii Avramenko
 * Website: https://www.espocrm.com
 *
 * EspoCRM is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * EspoCRM is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with EspoCRM. If not, see http://www.gnu.org/licenses/.
 *
 * The interactive user interfaces in modified source and object code versions
 * of this program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU General Public License version 3.
 *
 * In accordance with Section 7(b) of the GNU General Public License version 3,
 * these Appropriate Legal Notices must retain the display of the "EspoCRM" word.
 ************************************************************************/

define('views/merge', ['views/main'], function (Dep) {

    return Dep.extend({

        template: 'merge',

        el: '#main',

        scope: null,

        name: 'Merge',

        headerView: 'views/header',

        recordView: 'views/record/merge',

        setup: function () {
            this.models = this.options.models;

            this.setupHeader();
            this.setupRecord();
        },

        setupHeader: function () {
            this.createView('header', this.headerView, {
                model: this.model,
                el: '#main > .page-header'
            });
        },

        setupRecord: function () {
            this.createView('body', this.recordView, {
                el: '#main > .body',
                models: this.models,
                collection: this.collection
            });
        },

        getHeader: function () {
            return this.buildHeaderHtml([
                $('<a>')
                    .attr('href', '#' + this.models[0].entityType)
                    .text(this.getLanguage().translate(this.models[0].name, 'scopeNamesPlural')),
                $('<span>')
                    .text(this.getLanguage().translate('Merge'))
            ]);
        },

        updatePageTitle: function () {
            this.setPageTitle(this.getLanguage().translate('Merge'));
        },
    });
});

