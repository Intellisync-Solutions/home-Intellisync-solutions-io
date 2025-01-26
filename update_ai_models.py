import os
import re

def update_ai_model_page(file_path, icon, model_name):
    # Read the file
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Add import for TextShimmerWave if not already present
    if 'TextShimmerWave' not in content:
        content = content.replace('import { SEO }', 'import { SEO } from \'../../components/SEO\';\nimport { TextShimmerWave } from \'../../components/features/TextWave\'')
    
    # Replace the header section
    pattern = r'(<motion\.div\s+[^>]*className="text-center mb-12"[^>]*>)\s*<([^>]+)\s+className="[^"]*"\s*/>(\s*<h1[^>]*>([^<]+)</h1>)(\s*<p[^>]*>.*?</p>)?(\s*</motion\.div>)'
    replacement = r'\1\n        <div className="flex flex-col items-center">\n          <\2 className="mx-auto w-24 h-24 text-white mb-6" />\n          <TextShimmerWave\n            as="h1"\n            className="text-4xl font-bold mb-4 text-white"\n            duration={1.5}\n            spread={1.2}\n          >\n            ' + model_name + '\n          </TextShimmerWave>\n        </div>\5\6'
    
    updated_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # Write the updated content back to the file
    with open(file_path, 'w') as f:
        f.write(updated_content)

# List of AI Model pages with their respective icons and names
ai_models = [
    ('/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/ByteGuruPage.tsx', 'Brain', 'Byte Guru'),
    ('/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/ChefBytePage.tsx', 'Target', 'Chef Byte'),
    ('/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/CoachCalmPage.tsx', 'Lightbulb', 'Coach Calm'),
    ('/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/CourtsideClaraPage.tsx', 'Brain', 'Courtside Clara'),
    ('/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/DrDataPage.tsx', 'Brain', 'Dr. Data'),
    ('/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/HerHighnessHistoriaPage.tsx', 'Brain', 'Her Highness Historia'),
    ('/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/PlayGroundPage.tsx', 'Brain', 'Play Ground'),
    ('/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/ScriptSagePage.tsx', 'Brain', 'Script Sage'),
    ('/Users/chrisjune/Desktop/Current working folder/Website/Intellisync/src/pages/AIModels/TrendyTinaPage.tsx', 'Brain', 'Trendy Tina')
]

# Update each file
for file_path, icon, model_name in ai_models:
    update_ai_model_page(file_path, icon, model_name)
    print(f"Updated {file_path}")
