## Step to create tests frolder

1. - read directory /components/*
2. - cd in folder components list children [loop]
#. - create tests folder if not exists
#. - create index.test.js if in tests folder if not exists
#. - copy data from components/ContentNotFound/tests/index.test.js in here
3. - copy if not exists tests folder into children/
     * if exists test folder
       - copy if not exists index.test.js into /children/tests/*
# replace line at 4 string_replace "import ${component_name} from '../index';"
# replace line at 6 into "describe('${component_name} components', () => {"
# replace line at 8 string_replace "ContentNotFound" to "${component_name}"
4. replace all line in string_replace "ContentNotFound" to "${compoent_name}"
