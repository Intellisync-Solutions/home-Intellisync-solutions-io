#!/bin/bash

update_file() {
    local file="$1"
    local icon="$2"
    local model_name="$3"

    # Use perl for more complex replacements
    perl -0777 -i -pe "s|<TextShimmerWave\s+[^>]*>\s*([^<]+)\s*</TextShimmerWave>|<div className=\"flex flex-col items-center\">\n          <$icon className=\"mx-auto w-24 h-24 text-white mb-6\" />\n          <TextShimmerWave\n            as=\"h1\"\n            className=\"text-4xl font-bold mb-4 text-white\"\n            duration={1.5}\n            spread={1.2}\n          >\n            $model_name\n          </TextShimmerWave>\n        </div>|g" "$file"
}

# Update each file
update_file "/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/ByteGuruPage.tsx" "Brain" "Byte Guru"
update_file "/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/ChefBytePage.tsx" "Target" "Chef Byte"
update_file "/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/CoachCalmPage.tsx" "Lightbulb" "Coach Calm"
update_file "/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/CourtsideClaraPage.tsx" "Brain" "Courtside Clara"
update_file "/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/DrDataPage.tsx" "Brain" "Dr. Data"
update_file "/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/HerHighnessHistoriaPage.tsx" "Brain" "Her Highness Historia"
update_file "/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/PlayGroundPage.tsx" "Brain" "Play Ground"
update_file "/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/ScriptSagePage.tsx" "Brain" "Script Sage"
update_file "/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/TrendyTinaPage.tsx" "Brain" "Trendy Tina"
