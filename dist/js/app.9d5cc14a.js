(function () {
  "use strict";
  var o = {
      6201: function (o, t, e) {
        var n = e(9242),
          i = e(3396);
        const d = { class: "container" };
        function r(o, t, e, n, r, c) {
          const s = (0, i.up)("AddTodo"),
            a = (0, i.up)("FilterTodos"),
            l = (0, i.up)("ToDos");
          return (
            (0, i.wg)(),
            (0, i.iD)("div", d, [(0, i.Wm)(s), (0, i.Wm)(a), (0, i.Wm)(l)])
          );
        }
        var c = e(7139);
        const s = (o) => (
            (0, i.dD)("data-v-78de5cd3"), (o = o()), (0, i.Cn)(), o
          ),
          a = s(() => (0, i._)("h3", null, "Список дел", -1)),
          l = { class: "todos" },
          u = ["onClick"],
          p = s(() =>
            (0, i._)(
              "path",
              {
                d: "M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z",
              },
              null,
              -1
            )
          ),
          f = [p];
        function v(o, t, e, n, d, r) {
          return (
            (0, i.wg)(),
            (0, i.iD)("div", null, [
              a,
              (0, i._)("div", l, [
                ((0, i.wg)(!0),
                (0, i.iD)(
                  i.HY,
                  null,
                  (0, i.Ko)(
                    o.allTodos,
                    (t) => (
                      (0, i.wg)(),
                      (0, i.iD)("div", { class: "todo", key: t.id }, [
                        (0, i.Uk)((0, c.zw)(t.title) + " ", 1),
                        ((0, i.wg)(),
                        (0, i.iD)(
                          "svg",
                          {
                            onClick: (e) => o.deleteTodo(t.id),
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "1em",
                            viewBox: "0 0 448 512",
                          },
                          f,
                          8,
                          u
                        )),
                      ])
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        var m = e(65),
          h = {
            name: "ToDos",
            methods: { ...(0, m.nv)(["fetchTodos", "deleteTodo"]) },
            computed: { ...(0, m.Se)(["allTodos"]) },
            created() {
              this.fetchTodos();
            },
          },
          T = e(89);
        const w = (0, T.Z)(h, [
          ["render", v],
          ["__scopeId", "data-v-78de5cd3"],
        ]);
        var g = w;
        const y = (o) => (
            (0, i.dD)("data-v-e52804da"), (o = o()), (0, i.Cn)(), o
          ),
          _ = y(() => (0, i._)("h2", null, "Добавить дело", -1)),
          b = { class: "add" },
          D = y(() =>
            (0, i._)("input", { type: "submit", value: "Добавить" }, null, -1)
          );
        function V(o, t, e, d, r, c) {
          return (
            (0, i.wg)(),
            (0, i.iD)("div", null, [
              _,
              (0, i._)("div", b, [
                (0, i._)(
                  "form",
                  {
                    onSubmit:
                      t[1] ||
                      (t[1] = (0, n.iM)(
                        (t) => o.addTodo(r.title),
                        ["prevent"]
                      )),
                  },
                  [
                    (0, i.wy)(
                      (0, i._)(
                        "input",
                        {
                          type: "text",
                          "onUpdate:modelValue":
                            t[0] || (t[0] = (o) => (r.title = o)),
                          placeholder: "  Новое дело",
                        },
                        null,
                        512
                      ),
                      [[n.nr, r.title]]
                    ),
                    D,
                  ],
                  32
                ),
              ]),
            ])
          );
        }
        var O = {
          name: "AddTodo",
          data() {
            return { title: "" };
          },
          methods: { ...(0, m.nv)(["addTodo"]) },
        };
        const j = (0, T.Z)(O, [
          ["render", V],
          ["__scopeId", "data-v-e52804da"],
        ]);
        var x = j;
        const k = (0, i._)("h3", null, "Фильтр дел:", -1),
          C = (0, i.uE)(
            '<option value="200">200 дел</option><option value="100">100 дел</option><option value="50">50 дел</option><option value="20">20 дел</option><option value="10">10 дел</option><option value="5">5 дел</option>',
            6
          ),
          H = [C];
        function Z(o, t, e, d, r, c) {
          return (
            (0, i.wg)(),
            (0, i.iD)("div", null, [
              k,
              (0, i.wy)(
                (0, i._)(
                  "select",
                  {
                    "onUpdate:modelValue":
                      t[0] || (t[0] = (o) => (r.filterItem = o)),
                    onChange:
                      t[1] || (t[1] = (t) => o.filterTodo(r.filterItem)),
                  },
                  H,
                  544
                ),
                [[n.bM, r.filterItem]]
              ),
            ])
          );
        }
        var z = {
          name: "FilterTodos",
          methods: (0, m.nv)(["filterTodo"]),
          data() {
            return { filterItem: null };
          },
        };
        const I = (0, T.Z)(z, [["render", Z]]);
        var M = I,
          A = {
            name: "App",
            components: { ToDos: g, AddTodo: x, FilterTodos: M },
          };
        const F = (0, T.Z)(A, [["render", r]]);
        var S = F,
          U = (e(541), e(4161)),
          W = (0, m.MT)({
            state: {
              todos: [
                { id: 1, item: "Todo 1" },
                { id: 2, item: "Todo 2" },
              ],
            },
            getters: {
              allTodos(o) {
                return o.todos;
              },
            },
            actions: {
              async fetchTodos({ commit: o }) {
                const t = await U.Z.get(
                  "https://jsonplaceholder.typicode.com/todos"
                );
                o("setTodos", t.data);
              },
              async addTodo({ commit: o }, t) {
                const e = await U.Z.post(
                  "https://jsonplaceholder.typicode.com/todos",
                  { title: t, completed: !1 }
                );
                o("newTodo", e.data);
              },
              async deleteTodo({ commit: o }, t) {
                await U.Z.delete(
                  "https://jsonplaceholder.typicode.com/todos/" + t
                ),
                  o("removeTodo", t);
              },
              async filterTodo({ commit: o }, t) {
                const e = await U.Z.get(
                  `https://jsonplaceholder.typicode.com/todos?_limit=${t}`
                );
                o("setTodos", e.data);
              },
            },
            mutations: {
              setTodos: (o, t) => (o.todos = t),
              newTodo: (o, t) => o.todos.unshift(t),
              removeTodo: (o, t) =>
                (o.todos = o.todos.filter((o) => o.id !== t)),
            },
            modules: {},
          });
        (0, n.ri)(S).use(W).mount("#app");
      },
    },
    t = {};
  function e(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var d = (t[n] = { exports: {} });
    return o[n].call(d.exports, d, d.exports, e), d.exports;
  }
  (e.m = o),
    (function () {
      var o = [];
      e.O = function (t, n, i, d) {
        if (!n) {
          var r = 1 / 0;
          for (l = 0; l < o.length; l++) {
            (n = o[l][0]), (i = o[l][1]), (d = o[l][2]);
            for (var c = !0, s = 0; s < n.length; s++)
              (!1 & d || r >= d) &&
              Object.keys(e.O).every(function (o) {
                return e.O[o](n[s]);
              })
                ? n.splice(s--, 1)
                : ((c = !1), d < r && (r = d));
            if (c) {
              o.splice(l--, 1);
              var a = i();
              void 0 !== a && (t = a);
            }
          }
          return t;
        }
        d = d || 0;
        for (var l = o.length; l > 0 && o[l - 1][2] > d; l--) o[l] = o[l - 1];
        o[l] = [n, i, d];
      };
    })(),
    (function () {
      e.n = function (o) {
        var t =
          o && o.__esModule
            ? function () {
                return o["default"];
              }
            : function () {
                return o;
              };
        return e.d(t, { a: t }), t;
      };
    })(),
    (function () {
      e.d = function (o, t) {
        for (var n in t)
          e.o(t, n) &&
            !e.o(o, n) &&
            Object.defineProperty(o, n, { enumerable: !0, get: t[n] });
      };
    })(),
    (function () {
      e.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (o) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      e.o = function (o, t) {
        return Object.prototype.hasOwnProperty.call(o, t);
      };
    })(),
    (function () {
      var o = { 143: 0 };
      e.O.j = function (t) {
        return 0 === o[t];
      };
      var t = function (t, n) {
          var i,
            d,
            r = n[0],
            c = n[1],
            s = n[2],
            a = 0;
          if (
            r.some(function (t) {
              return 0 !== o[t];
            })
          ) {
            for (i in c) e.o(c, i) && (e.m[i] = c[i]);
            if (s) var l = s(e);
          }
          for (t && t(n); a < r.length; a++)
            (d = r[a]), e.o(o, d) && o[d] && o[d][0](), (o[d] = 0);
          return e.O(l);
        },
        n = (self["webpackChunk_06_vuex"] = self["webpackChunk_06_vuex"] || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var n = e.O(void 0, [998], function () {
    return e(6201);
  });
  n = e.O(n);
})();
//# sourceMappingURL=app.9d5cc14a.js.map
