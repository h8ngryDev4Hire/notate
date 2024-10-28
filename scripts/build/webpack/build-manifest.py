import json
import os
import argparse

def build_chrome_manifest(root_dir: str, build_dir: str) -> None:
    """
    Build Chrome manifest by injecting PEM key into manifest.json
    
    Args:
        root_dir (str): Project root directory path
        build_dir (str): Build directory path
    """
    try:
        # Read PEM key file, skip first and last lines
        pem_path = os.path.join(root_dir, 'notate.pem')
        with open(pem_path, 'r') as pem_file:
            pem_lines = pem_file.readlines()
            rough_pem_key = ''.join(pem_lines[1:-1]).strip()
            pem_key = rough_pem_key.replace('\n', '')

        # Create manifest key JSON structure
        manifest_key = {"key": pem_key}

        # Read and update manifest
        manifest_path = os.path.join(build_dir, 'manifest.json')
        with open(manifest_path, 'r') as manifest_file:
            manifest_data = json.load(manifest_file)

        # Merge manifest with key
        manifest_data.update(manifest_key)

        # Write updated manifest
        with open(manifest_path, 'w') as manifest_file:
            json.dump(manifest_data, manifest_file, indent=2)

    except FileNotFoundError as e:
        print(f"Error: Required file not found - {e.filename}")
        raise
    except json.JSONDecodeError:
        print("Error: Invalid manifest.json format")
        raise
    except Exception as e:
        print(f"Error processing manifest: {str(e)}")
        raise

def main():
    parser = argparse.ArgumentParser(description='Build Chrome extension manifest')
    parser.add_argument('--root', required=True, help='Project root directory')
    parser.add_argument('--build-dir', required=True, help='Build directory')
    
    args = parser.parse_args()
    build_chrome_manifest(args.root, args.build_dir)

if __name__ == "__main__":
    main()
