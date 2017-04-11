(set-env!
  :resource-paths #{"resources"}
  :dependencies '[[cljsjs/boot-cljsjs "0.5.2" :scope "test"]])

(require '[cljsjs.boot-cljsjs.packaging :refer :all])

(def +lib-version+ "1.1.10")
(def +version+ (str +lib-version+ "-0"))

(task-options!
  pom {:project     'cljsjs/quill
       :version     +version+
       :description "Quill is a free, open source WYSIWYG editor built for the modern web."
       :url         "http://quilljs.com/"
       :license     {"BSD 3-Clause" "http://opensource.org/licenses/BSD-3-Clause"}})

(deftask package []
         (comp
           (download :url
                     (format "https://github.com/quilljs/quill/releases/download/v%s/quill.tar.gz" +lib-version+)
                     :decompress true
                     :archive-format "tar"
                     :compression-format "gz")
           (sift :move {#".*quill\.js$"             "cljsjs/quill/development/quill.inc.js"
                        #".*quill\.min\.js$"        "cljsjs/quill/production/quill.min.inc.js"
                        #".*quill\.([^.]*)\.css$"   "cljsjs/quill/common/quill.$1.inc.css"})
           (sift :include #{#"^cljsjs"})
           (deps-cljs :name "cljsjs.quill")
           (pom)
           (jar)))
