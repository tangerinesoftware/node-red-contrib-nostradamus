/**
 * Copyright 2017 Nick Pye
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

 module.exports = function(RED) {

     var forecast = require('nostradamus');

     function nostradamusNode(config) {
         RED.nodes.createNode(this,config);
         var node = this;
         node.on('input', function(msg) {
             msg.payload = forecast(msg.payload, msg.alpha, msg.beta, msg.gamma, msg.period, msg.m);
             node.send(msg);
         });
     }
     RED.nodes.registerType("nostradamus",nostradamusNode);
 }
